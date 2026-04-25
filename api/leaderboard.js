const LEADERBOARD_KEY = "kanye_clicker_leaderboard";
const MAX_ENTRIES = 5;

function getKvConfig() {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
        return null;
    }

    return { url, token };
}

function normalizeName(name) {
    return String(name || "").trim().slice(0, 20);
}

function normalizeEntries(entries) {
    if (!Array.isArray(entries)) {
        return [];
    }

    const sanitized = entries
        .map((entry) => ({
            nome: normalizeName(entry && entry.nome),
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
        .slice(0, MAX_ENTRIES);
}

async function kvGetJson(config, key) {
    const response = await fetch(`${config.url}/get/${encodeURIComponent(key)}`, {
        headers: {
            Authorization: `Bearer ${config.token}`
        }
    });

    if (!response.ok) {
        throw new Error("Falha ao buscar no KV");
    }

    const data = await response.json();
    if (!data || data.result == null) {
        return [];
    }

    try {
        return JSON.parse(data.result);
    } catch {
        return [];
    }
}

async function kvSetJson(config, key, value) {
    const encodedValue = encodeURIComponent(JSON.stringify(value));
    const response = await fetch(`${config.url}/set/${encodeURIComponent(key)}/${encodedValue}`, {
        headers: {
            Authorization: `Bearer ${config.token}`
        }
    });

    if (!response.ok) {
        throw new Error("Falha ao salvar no KV");
    }
}

module.exports = async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");

    const config = getKvConfig();
    if (!config) {
        res.statusCode = 500;
        res.end(JSON.stringify({
            error: "KV nao configurado. Defina KV_REST_API_URL e KV_REST_API_TOKEN na Vercel."
        }));
        return;
    }

    try {
        if (req.method === "GET") {
            const entries = normalizeEntries(await kvGetJson(config, LEADERBOARD_KEY));
            res.statusCode = 200;
            res.end(JSON.stringify({ scores: entries }));
            return;
        }

        if (req.method === "POST") {
            const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
            const nome = normalizeName(body.nome);
            const score = Math.max(0, Math.floor(Number(body.score) || 0));

            if (!nome) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Nome invalido" }));
                return;
            }

            const current = normalizeEntries(await kvGetJson(config, LEADERBOARD_KEY));
            const updated = normalizeEntries([
                ...current,
                {
                    nome,
                    score,
                    criadoEm: new Date().toISOString()
                }
            ]);

            await kvSetJson(config, LEADERBOARD_KEY, updated);

            res.statusCode = 200;
            res.end(JSON.stringify({ scores: updated }));
            return;
        }

        res.statusCode = 405;
        res.setHeader("Allow", "GET, POST");
        res.end(JSON.stringify({ error: "Metodo nao permitido" }));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Erro interno na leaderboard" }));
    }
};
