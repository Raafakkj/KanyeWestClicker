const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;
const LEADERBOARD_FILE = path.join(ROOT_DIR, "leaderboard.json");
const MAX_LEADERBOARD_ENTRIES = 5;
const MAX_BODY_SIZE = 1024 * 1024;

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".avif": "image/avif"
};

let leaderboardWriteChain = Promise.resolve();

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(payload));
}

function normalizePlayerName(name) {
    return String(name || "").trim().slice(0, 20);
}

function normalizeLeaderboardEntries(entries) {
    if (!Array.isArray(entries)) {
        return [];
    }

    const sanitized = entries
        .map((entry) => ({
            nome: normalizePlayerName(entry && entry.nome),
            score: Math.max(0, Math.floor(Number(entry && entry.score) || 0)),
            criadoEm: entry && entry.criadoEm ? String(entry.criadoEm) : new Date().toISOString()
        }))
        .filter((entry) => entry.nome.length > 0);

    const bestByPlayer = new Map();
    sanitized.forEach((entry) => {
        const key = entry.nome.toLowerCase();
        const current = bestByPlayer.get(key);
        if (!current || entry.score > current.score) {
            bestByPlayer.set(key, entry);
        }
    });

    return Array.from(bestByPlayer.values())
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_LEADERBOARD_ENTRIES);
}

async function ensureLeaderboardFile() {
    if (fs.existsSync(LEADERBOARD_FILE)) {
        return;
    }

    const seed = {
        scores: [
            { nome: "KanyeFan", score: 1200, criadoEm: "2026-04-25T12:00:00.000Z" },
            { nome: "Yeezus", score: 800, criadoEm: "2026-04-25T11:30:00.000Z" }
        ]
    };

    await fsp.writeFile(LEADERBOARD_FILE, JSON.stringify(seed, null, 2), "utf8");
}

async function readLeaderboard() {
    await ensureLeaderboardFile();
    const raw = await fsp.readFile(LEADERBOARD_FILE, "utf8");

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch {
        parsed = { scores: [] };
    }

    const normalized = normalizeLeaderboardEntries(parsed.scores);
    return { scores: normalized };
}

async function writeLeaderboard(data) {
    const normalized = { scores: normalizeLeaderboardEntries(data.scores) };
    await fsp.writeFile(LEADERBOARD_FILE, JSON.stringify(normalized, null, 2), "utf8");
    return normalized;
}

function withLeaderboardLock(task) {
    leaderboardWriteChain = leaderboardWriteChain.then(task, task);
    return leaderboardWriteChain;
}

function parseRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
            if (body.length > MAX_BODY_SIZE) {
                reject(new Error("Body muito grande"));
                req.destroy();
            }
        });

        req.on("end", () => resolve(body));
        req.on("error", reject);
    });
}

async function handleLeaderboardApi(req, res) {
    if (req.method === "GET") {
        const leaderboard = await readLeaderboard();
        sendJson(res, 200, leaderboard);
        return;
    }

    if (req.method === "POST") {
        const rawBody = await parseRequestBody(req);
        let payload = {};
        try {
            payload = rawBody ? JSON.parse(rawBody) : {};
        } catch {
            sendJson(res, 400, { error: "JSON invalido" });
            return;
        }

        const nome = normalizePlayerName(payload.nome);
        const score = Math.max(0, Math.floor(Number(payload.score) || 0));

        if (!nome) {
            sendJson(res, 400, { error: "Nome invalido" });
            return;
        }

        const updated = await withLeaderboardLock(async () => {
            const current = await readLeaderboard();
            const entries = [...current.scores];
            const existingIndex = entries.findIndex((entry) => entry.nome.toLowerCase() === nome.toLowerCase());

            if (existingIndex >= 0) {
                entries[existingIndex] = {
                    ...entries[existingIndex],
                    nome,
                    score: Math.max(entries[existingIndex].score, score),
                    criadoEm: new Date().toISOString()
                };
            } else {
                entries.push({
                    nome,
                    score,
                    criadoEm: new Date().toISOString()
                });
            }

            return writeLeaderboard({ scores: entries });
        });

        sendJson(res, 200, updated);
        return;
    }

    res.setHeader("Allow", "GET, POST");
    sendJson(res, 405, { error: "Metodo nao permitido" });
}

function resolveStaticPath(urlPathname) {
    const decodedPath = decodeURIComponent(urlPathname.split("?")[0]);
    const requested = decodedPath === "/" ? "/index.html" : decodedPath;
    const normalized = path.normalize(requested).replace(/^([.][.][\\/])+/, "");
    return path.join(ROOT_DIR, normalized);
}

async function handleStatic(req, res, pathname) {
    const filePath = resolveStaticPath(pathname);

    if (!filePath.startsWith(ROOT_DIR)) {
        sendJson(res, 403, { error: "Acesso negado" });
        return;
    }

    try {
        const stat = await fsp.stat(filePath);
        if (stat.isDirectory()) {
            sendJson(res, 403, { error: "Diretorio nao permitido" });
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || "application/octet-stream";
        const content = await fsp.readFile(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
    } catch {
        sendJson(res, 404, { error: "Arquivo nao encontrado" });
    }
}

const server = http.createServer(async (req, res) => {
    try {
        const pathname = req.url ? req.url.split("?")[0] : "/";

        if (pathname === "/api/leaderboard") {
            await handleLeaderboardApi(req, res);
            return;
        }

        await handleStatic(req, res, pathname);
    } catch (error) {
        console.error(error);
        sendJson(res, 500, { error: "Erro interno" });
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
