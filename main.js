const TARGET_POINTS = 67;
const SHOP_PRICE_MULTIPLIER = 1.65;
const SAVE_KEY = "kanye_clicker_save_v4";
const LEADERBOARD_API = "/api/leaderboard";
const LEADERBOARD_SEED_URL = "leaderboard.json";
const LEADERBOARD_STORAGE_KEY = "kanye_clicker_leaderboard_local_v1";
const MAX_LEADERBOARD_ENTRIES = 5;
const ACHIEVEMENTS_PER_PAGE = 8;
const MAX_POINTERS = 25;
const AUTOCLICKER_FACE_ANGLE_DEG = -90; // ajuste aqui caso a ponta nao esteja apontando para o centro
const AUTOCLICKER_CLICK_DEPTH_BASE = 12;
const AUTOCLICKER_CLICK_DEPTH_STEP = 0.7;
const AUTOCLICKER_ORBIT_DURATION = 3.2;
const AUTOCLICKER_EDGE_GAP = 8;
const LEADERBOARD_DEFAULT_SCORES = [
    {
        nome: "KanyeFan",
        score: 1200,
        criadoEm: "2026-04-25T12:00:00.000Z"
    },
    {
        nome: "Yeezus",
        score: 800,
        criadoEm: "2026-04-25T11:30:00.000Z"
    }
];

const SHOP_ITEMS = [
    {
        id: "auto_clicker",
        nome: "Auto Clicker",
        descricao: "+2 pontos por segundo",
        precoBase: 250,
        tipo: "passive",
        valor: 2,
        usaPointer: true
    },
    {
        id: "studio_team",
        nome: "Studio Team",
        descricao: "+6 pontos por segundo",
        precoBase: 900,
        tipo: "passive",
        valor: 6
    },
    {
        id: "tour_bus",
        nome: "Tour Bus",
        descricao: "+15 pontos por segundo",
        precoBase: 2500,
        tipo: "passive",
        valor: 15
    },
    {
        id: "stream_farm",
        nome: "Stream Farm",
        descricao: "+35 pontos por segundo",
        precoBase: 6200,
        tipo: "passive",
        valor: 35
    },
    {
        id: "click_plus",
        nome: "Click +5",
        descricao: "+5 poder de clique",
        precoBase: 400,
        tipo: "click",
        valor: 5
    },
    {
        id: "beat_pack",
        nome: "Beat Pack",
        descricao: "+12 poder de clique",
        precoBase: 1400,
        tipo: "click",
        valor: 12
    },
    {
        id: "yeezy_campaign",
        nome: "Yeezy Campaign",
        descricao: "+30 poder de clique",
        precoBase: 3800,
        tipo: "click",
        valor: 30
    },
    {
        id: "vision_empire",
        nome: "Vision Empire",
        descricao: "+80 poder de clique",
        precoBase: 9800,
        tipo: "click",
        valor: 80
    }
];

const SKINS = [
    {
        id: 1,
        nome: "Kanye Classico",
        preco: 0,
        bonus: 0,
        imagem: "assets/kanye/41-414314_transparent-kanye-head-png-kanye-west-head-png.png"
    },
    {
        id: 2,
        nome: "Pablo",
        preco: 1200,
        bonus: 5,
        imagem: "assets/kanye/Kanye-West-Yeezy-Season-3-tlop-msg-2016-billboard-650.webp"
    },
    {
        id: 3,
        nome: "Yeezy",
        preco: 2800,
        bonus: 10,
        imagem: "assets/kanye/https___hypebeast.com_image_2017_09_kanye-west-debuts-new-adidas-yeezy-boost-700-wave-runners-0001.avif"
    },
    {
        id: 4,
        nome: "Jesus Is King",
        preco: 5200,
        bonus: 15,
        imagem: "assets/kanye/maxresdefault.jpg"
    },
    {
        id: 5,
        nome: "Donda",
        preco: 9000,
        bonus: 22,
        imagem: "assets/kanye/images (1).jpg"
    },
    {
        id: 6,
        nome: "Runaway Era",
        preco: 15000,
        bonus: 30,
        imagem: "assets/kanye/kanyeRunaway.jpg"
    },
    {
        id: 7,
        nome: "Graduation",
        preco: 24000,
        bonus: 40,
        imagem: "assets/kanye/48bb3318d8ae27f31eba3f1db412d15d.752x752x1.jpg"
    }
];

// =======================
// Temas de cor por skin
// Edite os hex aqui sem medo.
// =======================
const SKIN_COLOR_THEMES = {
    default: {
        bgPrimary: "#2f1f12",
        bgSecondary: "#1a120b",
        panelPrimary: "#4a3220",
        panelSecondary: "#2f1f14",
        panelBorder: "#9a6d35",
        accent: "#d7a042",
        accentStrong: "#ffd97a",
        textPrimary: "#f8efe0",
        textMuted: "#d0c0a8",
        itemBg: "#3b291b",
        buttonText: "#2b1a0d"
    },
    1: {
        bgPrimary: "#2f1f12",
        bgSecondary: "#1a120b",
        panelPrimary: "#4a3220",
        panelSecondary: "#2f1f14",
        panelBorder: "#9a6d35",
        accent: "#d7a042",
        accentStrong: "#ffd97a",
        textPrimary: "#f8efe0",
        textMuted: "#d0c0a8",
        itemBg: "#3b291b",
        buttonText: "#2b1a0d"
    },
    2: {
        bgPrimary: "#3b1f17",
        bgSecondary: "#1f120e",
        panelPrimary: "#5a2e24",
        panelSecondary: "#381d18",
        panelBorder: "#b86f4d",
        accent: "#f3a45d",
        accentStrong: "#ffd0a4",
        textPrimary: "#ffe8d9",
        textMuted: "#e0baa3",
        itemBg: "#4a2a22",
        buttonText: "#351c14"
    },
    3: {
        bgPrimary: "#1b2435",
        bgSecondary: "#0f151f",
        panelPrimary: "#2a3a54",
        panelSecondary: "#1a2436",
        panelBorder: "#5f8bd7",
        accent: "#7fb2ff",
        accentStrong: "#b8d6ff",
        textPrimary: "#eef5ff",
        textMuted: "#b8c9e6",
        itemBg: "#27354b",
        buttonText: "#102039"
    },
    4: {
        bgPrimary: "#0d1420",
        bgSecondary: "#050910",
        panelPrimary: "#15233a",
        panelSecondary: "#0d1626",
        panelBorder: "#4f83c4",
        accent: "#82b7ff",
        accentStrong: "#c2e0ff",
        textPrimary: "#eff8ff",
        textMuted: "#aec4da",
        itemBg: "#16253a",
        buttonText: "#122235"
    },
    5: {
        bgPrimary: "#181818",
        bgSecondary: "#080808",
        panelPrimary: "#222222",
        panelSecondary: "#131313",
        panelBorder: "#6d6d6d",
        accent: "#c4c4c4",
        accentStrong: "#efefef",
        textPrimary: "#f7f7f7",
        textMuted: "#bfbfbf",
        itemBg: "#262626",
        buttonText: "#181818"
    },
    6: {
        bgPrimary: "#2c1a29",
        bgSecondary: "#160d15",
        panelPrimary: "#42253d",
        panelSecondary: "#281724",
        panelBorder: "#be6ab0",
        accent: "#e58ad8",
        accentStrong: "#ffc7f6",
        textPrimary: "#ffeefe",
        textMuted: "#e2b4dc",
        itemBg: "#392136",
        buttonText: "#2b1727"
    },
    7: {
        bgPrimary: "#24122f",
        bgSecondary: "#13091a",
        panelPrimary: "#3b2050",
        panelSecondary: "#241534",
        panelBorder: "#a66ae2",
        accent: "#c88bff",
        accentStrong: "#e9c6ff",
        textPrimary: "#f9edff",
        textMuted: "#d7b8ea",
        itemBg: "#321d45",
        buttonText: "#1f122a"
    }
};

const ACHIEVEMENTS = [
    { id: 1, nome: "Eu sou Deus", descricao: "Chegue a 67 pontos", tipo: "points", meta: 67 },
    { id: 2, nome: "Warm Up", descricao: "Chegue a 250 pontos", tipo: "points", meta: 250 },
    { id: 3, nome: "Dropout", descricao: "Chegue a 500 pontos", tipo: "points", meta: 500 },
    { id: 4, nome: "Graduation", descricao: "Chegue a 1.000 pontos", tipo: "points", meta: 1000 },
    { id: 5, nome: "Superstar", descricao: "Chegue a 2.500 pontos", tipo: "points", meta: 2500 },
    { id: 6, nome: "Headliner", descricao: "Chegue a 5.000 pontos", tipo: "points", meta: 5000 },
    { id: 7, nome: "Legend", descricao: "Chegue a 10.000 pontos", tipo: "points", meta: 10000 },
    { id: 8, nome: "Untouchable", descricao: "Chegue a 25.000 pontos", tipo: "points", meta: 25000 },

    { id: 9, nome: "First Steps", descricao: "Faca 100 cliques", tipo: "clicks", meta: 100 },
    { id: 10, nome: "Hand Cramp", descricao: "Faca 500 cliques", tipo: "clicks", meta: 500 },
    { id: 11, nome: "No Breaks", descricao: "Faca 1.500 cliques", tipo: "clicks", meta: 1500 },
    { id: 12, nome: "Machine Hands", descricao: "Faca 5.000 cliques", tipo: "clicks", meta: 5000 },

    { id: 13, nome: "Automation", descricao: "Tenha 10 pontos/s", tipo: "passive", meta: 10 },
    { id: 14, nome: "Factory", descricao: "Tenha 50 pontos/s", tipo: "passive", meta: 50 },
    { id: 15, nome: "Industry", descricao: "Tenha 200 pontos/s", tipo: "passive", meta: 200 },
    { id: 16, nome: "Mega Label", descricao: "Tenha 500 pontos/s", tipo: "passive", meta: 500 },

    { id: 17, nome: "Auto Nation", descricao: "Compre 5 Auto Clickers", tipo: "item_quantity", itemId: "auto_clicker", meta: 5 },
    { id: 18, nome: "Studio Mogul", descricao: "Compre 10 Studio Teams", tipo: "item_quantity", itemId: "studio_team", meta: 10 },
    { id: 19, nome: "Tour Master", descricao: "Compre 8 Tour Bus", tipo: "item_quantity", itemId: "tour_bus", meta: 8 },
    { id: 20, nome: "Click God", descricao: "Compre 10 Click +5", tipo: "item_quantity", itemId: "click_plus", meta: 10 },

    { id: 21, nome: "Fashion Week", descricao: "Compre 3 skins", tipo: "skins_owned", meta: 3 },
    { id: 22, nome: "Wardrobe", descricao: "Compre 5 skins", tipo: "skins_owned", meta: 5 },
    { id: 23, nome: "Style Icon", descricao: "Use bonus de skin +20%", tipo: "skin_bonus", meta: 20 },
    { id: 24, nome: "Fashion Empire", descricao: "Use bonus de skin +35%", tipo: "skin_bonus", meta: 35 },

    { id: 25, nome: "Ranked", descricao: "Salve 1 score na leaderboard", tipo: "leaderboard_entries", meta: 1 },
    { id: 26, nome: "Competition", descricao: "Tenha 5 scores na leaderboard", tipo: "leaderboard_entries", meta: 5 }
];

let gameState = createDefaultGameState();
let leaderboardData = { scores: [] };
let autoClickInterval = null;
let conquistasPaginaAtual = 1;

function createDefaultGameState() {
    const shop = {};
    SHOP_ITEMS.forEach((item) => {
        shop[item.id] = {
            quantidade: 0,
            preco: item.precoBase
        };
    });

    const skins = {};
    SKINS.forEach((skin) => {
        skins[skin.id] = skin.id === 1;
    });

    return {
        points: 0,
        totalClicks: 0,
        shop,
        skins,
        currentSkinId: 1,
        unlockedAchievements: [],
        targetAlertShown: false
    };
}

function formatNumber(value) {
    return new Intl.NumberFormat("pt-BR").format(Math.floor(value));
}

function safeNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function sumOwnedSkins() {
    return SKINS.filter((skin) => gameState.skins[skin.id]).length;
}

function getCurrentSkin() {
    return SKINS.find((skin) => skin.id === gameState.currentSkinId) || SKINS[0];
}

function applySkinTheme(skinId) {
    const theme = {
        ...SKIN_COLOR_THEMES.default,
        ...(SKIN_COLOR_THEMES[skinId] || {})
    };

    const root = document.documentElement;
    root.style.setProperty("--theme-bg-primary", theme.bgPrimary);
    root.style.setProperty("--theme-bg-secondary", theme.bgSecondary);
    root.style.setProperty("--theme-panel-primary", theme.panelPrimary);
    root.style.setProperty("--theme-panel-secondary", theme.panelSecondary);
    root.style.setProperty("--theme-panel-border", theme.panelBorder);
    root.style.setProperty("--theme-accent", theme.accent);
    root.style.setProperty("--theme-accent-strong", theme.accentStrong);
    root.style.setProperty("--theme-text-primary", theme.textPrimary);
    root.style.setProperty("--theme-text-muted", theme.textMuted);
    root.style.setProperty("--theme-item-bg", theme.itemBg);
    root.style.setProperty("--theme-button-text", theme.buttonText);
}

function getSkinBonusPercent() {
    const skin = getCurrentSkin();
    return skin ? skin.bonus : 0;
}

function getGainMultiplier() {
    return 1 + (getSkinBonusPercent() / 100);
}

function getClickPower() {
    let click = 1;
    SHOP_ITEMS.forEach((item) => {
        if (item.tipo === "click") {
            click += gameState.shop[item.id].quantidade * item.valor;
        }
    });
    return click;
}

function getPassivePerSecond() {
    let passive = 0;
    SHOP_ITEMS.forEach((item) => {
        if (item.tipo === "passive") {
            passive += gameState.shop[item.id].quantidade * item.valor;
        }
    });
    return passive;
}

function getTotalOwnedItems() {
    return SHOP_ITEMS.reduce((acc, item) => acc + gameState.shop[item.id].quantidade, 0);
}

function adicionarPontos(baseAmount) {
    const gained = Math.max(1, Math.floor(baseAmount * getGainMultiplier()));
    gameState.points += gained;
    return gained;
}

function saveGameState() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
    } catch (error) {
        console.error("Nao foi possivel salvar o progresso.", error);
    }
}

function loadGameState() {
    const defaultState = createDefaultGameState();

    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) {
            gameState = defaultState;
            return;
        }

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") {
            gameState = defaultState;
            return;
        }

        defaultState.points = Math.max(0, Math.floor(safeNumber(parsed.points, 0)));
        defaultState.totalClicks = Math.max(0, Math.floor(safeNumber(parsed.totalClicks, 0)));
        defaultState.targetAlertShown = Boolean(parsed.targetAlertShown);

        if (parsed.shop && typeof parsed.shop === "object") {
            SHOP_ITEMS.forEach((item) => {
                const loadedItem = parsed.shop[item.id] || {};
                const quantidade = Math.max(0, Math.floor(safeNumber(loadedItem.quantidade, 0)));
                const preco = Math.max(item.precoBase, Math.floor(safeNumber(loadedItem.preco, item.precoBase)));
                defaultState.shop[item.id] = { quantidade, preco };
            });
        }

        if (parsed.skins && typeof parsed.skins === "object") {
            SKINS.forEach((skin) => {
                if (skin.id === 1) {
                    defaultState.skins[skin.id] = true;
                } else {
                    defaultState.skins[skin.id] = Boolean(parsed.skins[skin.id]);
                }
            });
        }

        const currentSkinId = Math.floor(safeNumber(parsed.currentSkinId, 1));
        defaultState.currentSkinId = defaultState.skins[currentSkinId] ? currentSkinId : 1;

        if (Array.isArray(parsed.unlockedAchievements)) {
            const valid = new Set(ACHIEVEMENTS.map((a) => a.id));
            defaultState.unlockedAchievements = parsed.unlockedAchievements
                .map((id) => Math.floor(safeNumber(id, 0)))
                .filter((id) => valid.has(id));
        }

        gameState = defaultState;
    } catch (error) {
        console.error("Erro ao carregar save. Reiniciando progresso.", error);
        gameState = defaultState;
    }
}

function sanitizeLeaderboardEntries(entries) {
    if (!Array.isArray(entries)) {
        return [];
    }

    const sanitized = entries
        .filter((entry) => entry && typeof entry.nome === "string")
        .map((entry) => ({
            nome: normalizarNome(entry.nome),
            score: Math.max(0, Math.floor(safeNumber(entry.score, 0))),
            criadoEm: entry.criadoEm || new Date().toISOString()
        }))
        .filter((entry) => entry.nome.length > 0);

    const bestByPlayer = new Map();

    sanitized.forEach((entry) => {
        const key = entry.nome.toLowerCase();
        const existing = bestByPlayer.get(key);
        if (!existing || entry.score > existing.score) {
            bestByPlayer.set(key, entry);
        }
    });

    return Array.from(bestByPlayer.values())
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_LEADERBOARD_ENTRIES);
}

function saveLeaderboardCache() {
    try {
        localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(leaderboardData));
    } catch (error) {
        console.error("Nao foi possivel salvar leaderboard local.", error);
    }
}

async function carregarLeaderboardLocal() {
    try {
        const cacheRaw = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
        if (cacheRaw) {
            const cacheParsed = JSON.parse(cacheRaw);
            leaderboardData = {
                scores: sanitizeLeaderboardEntries(cacheParsed.scores)
            };
            return;
        }
    } catch (error) {
        console.error("Erro ao carregar cache local da leaderboard.", error);
    }

    try {
        const response = await fetch(LEADERBOARD_SEED_URL, { cache: "no-store" });
        if (!response.ok) {
            throw new Error("Falha ao carregar leaderboard.json");
        }

        const data = await response.json();
        leaderboardData = {
            scores: sanitizeLeaderboardEntries(data.scores)
        };
    } catch (error) {
        console.warn("Nao foi possivel carregar leaderboard.json. Usando seed interna.", error);
        leaderboardData = {
            scores: sanitizeLeaderboardEntries(LEADERBOARD_DEFAULT_SCORES)
        };
    }

    saveLeaderboardCache();
}

async function carregarLeaderboard(mostrarLoading = false) {
    const container = document.getElementById("leaderboard-lista");
    if (mostrarLoading && container) {
        container.innerHTML = `
            <div class="shop-item">
                <div class="item-info">
                    <h3>Carregando leaderboard...</h3>
                </div>
            </div>
        `;
    }

    try {
        const response = await fetch(LEADERBOARD_API, { cache: "no-store" });
        if (!response.ok) {
            throw new Error("Falha ao carregar leaderboard compartilhada");
        }

        const data = await response.json();
        leaderboardData = {
            scores: sanitizeLeaderboardEntries(data.scores)
        };
        saveLeaderboardCache();
    } catch (error) {
        console.warn("Servidor indisponivel. Usando leaderboard local.", error);
        await carregarLeaderboardLocal();
    }

    renderizarLeaderboard(leaderboardData.scores);
}

function applyCurrentSkinVisual() {
    const skin = getCurrentSkin();
    const img = document.getElementById("kanye").querySelector("img");
    img.src = skin.imagem;
    applySkinTheme(skin.id);
}

function getKanyeButtonCenter() {
    const button = document.getElementById("kanye");
    if (!button) {
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
    }

    const rect = button.getBoundingClientRect();
    return {
        x: rect.left + (rect.width / 2),
        y: rect.top + (rect.height / 2)
    };
}

function getKanyeButtonMetrics() {
    const button = document.getElementById("kanye");
    if (!button) {
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            radius: 120
        };
    }

    const rect = button.getBoundingClientRect();
    return {
        x: rect.left + (rect.width / 2),
        y: rect.top + (rect.height / 2),
        radius: Math.min(rect.width, rect.height) / 2
    };
}

function atualizarCentroPonteiros() {
    const metrics = getKanyeButtonMetrics();
    const orbitRadius = Math.max(40, metrics.radius + AUTOCLICKER_EDGE_GAP);

    document.querySelectorAll(".pointer-orbit[data-generated='1']").forEach((pointer) => {
        pointer.style.setProperty("--center-x", `${metrics.x}px`);
        pointer.style.setProperty("--center-y", `${metrics.y}px`);
        pointer.style.setProperty("--radius", `${orbitRadius}px`);
    });
}

function criarPointer(indice, totalPointers) {
    const pointer = document.createElement("img");
    pointer.src = "pointer.svg";
    pointer.className = "pointer-orbit";
    pointer.dataset.generated = "1";

    const metrics = getKanyeButtonMetrics();
    const radius = Math.max(40, metrics.radius + AUTOCLICKER_EDGE_GAP);
    const duration = AUTOCLICKER_ORBIT_DURATION;
    const delay = -((indice - 1) / Math.max(1, totalPointers)) * duration;
    const clickDepth = Math.min(26, AUTOCLICKER_CLICK_DEPTH_BASE + (indice * AUTOCLICKER_CLICK_DEPTH_STEP));

    pointer.style.setProperty("--radius", `${radius}px`);
    pointer.style.setProperty("--click-depth", `${clickDepth}px`);
    pointer.style.setProperty("--pointer-face-angle", `${AUTOCLICKER_FACE_ANGLE_DEG}deg`);
    pointer.style.setProperty("--center-x", `${metrics.x}px`);
    pointer.style.setProperty("--center-y", `${metrics.y}px`);
    pointer.style.animationDuration = `${duration}s`;
    pointer.style.animationDelay = `${delay}s`;

    document.body.appendChild(pointer);
}

function renderPointers() {
    document.querySelectorAll(".pointer-orbit[data-generated='1']").forEach((el) => el.remove());

    const pointerCount = Math.min(gameState.shop.auto_clicker.quantidade, MAX_POINTERS);
    for (let i = 1; i <= pointerCount; i += 1) {
        criarPointer(i, pointerCount);
    }
    atualizarCentroPonteiros();
}

function mostrarAnimacaoCompra(mensagem) {
    const anim = document.createElement("div");
    anim.className = "compra-animacao";
    anim.innerHTML = `<span>${mensagem}</span>`;
    document.body.appendChild(anim);

    setTimeout(() => anim.remove(), 1500);
}

function atualizarPontos() {
    document.getElementById("points").innerText = `Kanye Points: ${formatNumber(gameState.points)}`;
}

function atualizarItens() {
    const itens = [];

    SHOP_ITEMS.forEach((item) => {
        const quantidade = gameState.shop[item.id].quantidade;
        if (quantidade > 0) {
            itens.push(`${item.nome} x${quantidade}`);
        }
    });

    const skinAtual = getCurrentSkin();
    if (skinAtual) {
        itens.push(`Skin ativa: ${skinAtual.nome}`);
    }

    const textoItens = itens.length > 0 ? itens.join(", ") : "Nenhum";
    document.getElementById("items").textContent = `Itens: ${textoItens}`;
}

function checkTarget() {
    if (!gameState.targetAlertShown && gameState.points >= TARGET_POINTS) {
        gameState.targetAlertShown = true;
        showAlert();
        saveGameState();
    }
}

function showAlert() {
    document.getElementById("alertPoints").textContent = formatNumber(gameState.points);
    document.getElementById("customAlert").style.display = "flex";
}

function fecharAlert() {
    document.getElementById("customAlert").style.display = "none";
}

function renderShop() {
    const container = document.getElementById("shop-items");

    container.innerHTML = SHOP_ITEMS.map((item) => {
        const state = gameState.shop[item.id];
        return `
            <div class="shop-item">
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <p>${item.descricao}</p>
                    <p class="item-level">Nivel: ${state.quantidade}</p>
                    <span class="item-price">${formatNumber(state.preco)} pontos</span>
                </div>
                <button class="shop-btn" onclick="comprarItem('${item.id}')">Comprar</button>
            </div>
        `;
    }).join("");
}

function comprarItem(itemId) {
    const item = SHOP_ITEMS.find((entry) => entry.id === itemId);
    if (!item) {
        return;
    }

    const itemState = gameState.shop[item.id];
    if (gameState.points < itemState.preco) {
        alert("Pontos insuficientes!");
        return;
    }

    gameState.points -= itemState.preco;
    itemState.quantidade += 1;
    itemState.preco = Math.floor(itemState.preco * SHOP_PRICE_MULTIPLIER);

    renderShop();
    renderPointers();
    atualizarPontos();
    atualizarItens();
    verificarConquistas();
    checkTarget();
    saveGameState();

    mostrarAnimacaoCompra(`${item.nome} comprado!`);
}

function abrirLoja() {
    renderShop();
    document.getElementById("shop").style.display = "flex";
}

function fecharLoja() {
    document.getElementById("shop").style.display = "none";
}

function getAchievementProgress(achievement) {
    if (achievement.tipo === "points") {
        return gameState.points;
    }

    if (achievement.tipo === "clicks") {
        return gameState.totalClicks;
    }

    if (achievement.tipo === "passive") {
        return getPassivePerSecond();
    }

    if (achievement.tipo === "item_quantity") {
        return gameState.shop[achievement.itemId] ? gameState.shop[achievement.itemId].quantidade : 0;
    }

    if (achievement.tipo === "skins_owned") {
        return sumOwnedSkins();
    }

    if (achievement.tipo === "skin_bonus") {
        return getSkinBonusPercent();
    }

    if (achievement.tipo === "leaderboard_entries") {
        return leaderboardData.scores.length;
    }

    return 0;
}

function isAchievementUnlocked(id) {
    return gameState.unlockedAchievements.includes(id);
}

function verificarConquistas() {
    let desbloqueou = false;

    ACHIEVEMENTS.forEach((achievement) => {
        if (isAchievementUnlocked(achievement.id)) {
            return;
        }

        if (getAchievementProgress(achievement) >= achievement.meta) {
            gameState.unlockedAchievements.push(achievement.id);
            desbloqueou = true;
            mostrarAnimacaoCompra(`Conquista: ${achievement.nome}`);
        }
    });

    if (desbloqueou) {
        saveGameState();
        renderizarConquistas();
    }
}

function renderizarConquistas() {
    const container = document.getElementById("lista-conquistas");
    const pageInfo = document.getElementById("achievements-page-info");
    const totalPages = Math.max(1, Math.ceil(ACHIEVEMENTS.length / ACHIEVEMENTS_PER_PAGE));

    if (conquistasPaginaAtual > totalPages) {
        conquistasPaginaAtual = totalPages;
    }

    const start = (conquistasPaginaAtual - 1) * ACHIEVEMENTS_PER_PAGE;
    const visible = ACHIEVEMENTS.slice(start, start + ACHIEVEMENTS_PER_PAGE);

    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))";
    container.style.gap = "12px";

    container.innerHTML = visible.map((achievement) => {
        const unlocked = isAchievementUnlocked(achievement.id);
        const progress = Math.min(getAchievementProgress(achievement), achievement.meta);

        return `
            <div class="shop-item ${unlocked ? "desbloqueado" : ""}">
                <div class="item-info">
                    <h3>${unlocked ? "⭐" : "🔒"} ${achievement.nome}</h3>
                    <p>${achievement.descricao}</p>
                    <p>${formatNumber(progress)} / ${formatNumber(achievement.meta)}</p>
                </div>
            </div>
        `;
    }).join("");

    pageInfo.textContent = `Pagina ${conquistasPaginaAtual} / ${totalPages}`;

    const canPrev = conquistasPaginaAtual > 1;
    const canNext = conquistasPaginaAtual < totalPages;
    document.querySelector(".achievements-pagination .page-btn:first-child").disabled = !canPrev;
    document.querySelector(".achievements-pagination .page-btn:last-child").disabled = !canNext;
}

function paginaAnteriorConquistas() {
    if (conquistasPaginaAtual > 1) {
        conquistasPaginaAtual -= 1;
        renderizarConquistas();
    }
}

function paginaProximaConquistas() {
    const totalPages = Math.max(1, Math.ceil(ACHIEVEMENTS.length / ACHIEVEMENTS_PER_PAGE));
    if (conquistasPaginaAtual < totalPages) {
        conquistasPaginaAtual += 1;
        renderizarConquistas();
    }
}

function abrirConquistas() {
    renderizarConquistas();
    document.getElementById("achievements").style.display = "flex";
}

function fecharConquistas() {
    document.getElementById("achievements").style.display = "none";
}

function renderizarSkins() {
    const container = document.getElementById("lista-skins");

    container.innerHTML = SKINS.map((skin) => {
        const comprado = Boolean(gameState.skins[skin.id]);
        const usando = gameState.currentSkinId === skin.id;

        return `
            <div class="shop-item ${comprado ? "comprado" : ""}">
                <div class="item-info">
                    <h3>${usando ? "*" : ""} ${skin.nome}</h3>
                    <p>${skin.preco === 0 ? "Gratis" : `${formatNumber(skin.preco)} pontos`}</p>
                    <p>Bonus: +${skin.bonus}% no ganho de pontos</p>
                </div>
                ${comprado
                    ? (usando
                        ? "<button class='shop-btn' disabled>Usando</button>"
                        : `<button class='shop-btn' onclick='usarSkin(${skin.id})'>Usar</button>`)
                    : `<button class='shop-btn' onclick='comprarSkin(${skin.id})'>Comprar</button>`
                }
            </div>
        `;
    }).join("");
}

function comprarSkin(id) {
    const skin = SKINS.find((entry) => entry.id === id);
    if (!skin) {
        return;
    }

    if (gameState.skins[skin.id]) {
        usarSkin(skin.id);
        return;
    }

    if (gameState.points < skin.preco) {
        alert("Pontos insuficientes!");
        return;
    }

    gameState.points -= skin.preco;
    gameState.skins[skin.id] = true;

    atualizarPontos();
    atualizarItens();
    renderizarSkins();
    verificarConquistas();
    saveGameState();

    mostrarAnimacaoCompra(`Skin liberada: ${skin.nome}`);
}

function usarSkin(id) {
    if (!gameState.skins[id]) {
        return;
    }

    gameState.currentSkinId = id;
    applyCurrentSkinVisual();
    atualizarPontos();
    atualizarItens();
    renderizarSkins();
    verificarConquistas();
    saveGameState();

    const skin = getCurrentSkin();
    mostrarAnimacaoCompra(`Skin ativa: ${skin.nome} (+${skin.bonus}%)`);
}

function abrirPersonalizacao() {
    renderizarSkins();
    document.getElementById("customization").style.display = "flex";
}

function fecharPersonalizacao() {
    document.getElementById("customization").style.display = "none";
}

function normalizarNome(nome) {
    return String(nome || "").trim().slice(0, 20);
}

function atualizarRegistroLeaderboard(nome, score) {
    const key = nome.toLowerCase();
    const nowIso = new Date().toISOString();
    const current = Array.isArray(leaderboardData.scores) ? leaderboardData.scores : [];

    let found = false;

    const updated = current.map((entry) => {
        if (entry.nome.toLowerCase() !== key) {
            return entry;
        }

        found = true;
        return {
            ...entry,
            nome,
            score: Math.max(entry.score, score),
            criadoEm: nowIso
        };
    });

    if (!found) {
        updated.push({
            nome,
            score,
            criadoEm: nowIso
        });
    }

    leaderboardData.scores = sanitizeLeaderboardEntries(updated);
    saveLeaderboardCache();
}

function renderizarLeaderboard(scores) {
    const container = document.getElementById("leaderboard-lista");

    if (!scores || scores.length === 0) {
        container.innerHTML = `
            <div class="shop-item">
                <div class="item-info">
                    <h3>Nenhum score salvo ainda</h3>
                    <p>Salve sua pontuacao para iniciar o ranking.</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = scores.map((entry, index) => `
        <div class="shop-item">
            <div class="item-info">
                <h3><span class="leaderboard-rank">#${index + 1}</span> ${entry.nome}</h3>
                <p>${new Date(entry.criadoEm).toLocaleString("pt-BR")}</p>
            </div>
            <span class="leaderboard-score">${formatNumber(entry.score)} pts</span>
        </div>
    `).join("");
}

async function abrirLeaderboard() {
    document.getElementById("leaderboard").style.display = "flex";
    await carregarLeaderboard(true);
}

function fecharLeaderboard() {
    document.getElementById("leaderboard").style.display = "none";
}

async function salvarScoreLeaderboard() {
    const input = document.getElementById("leaderboard-name");
    const nome = normalizarNome(input.value);

    if (!nome) {
        alert("Digite seu nome para salvar no ranking.");
        return;
    }

    if (gameState.points <= 0) {
        alert("Faca alguns pontos antes de salvar.");
        return;
    }

    const scoreAtual = Math.floor(gameState.points);

    try {
        const response = await fetch(LEADERBOARD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                score: scoreAtual
            })
        });

        if (!response.ok) {
            throw new Error("Falha ao salvar leaderboard compartilhada");
        }

        const data = await response.json();
        leaderboardData = {
            scores: sanitizeLeaderboardEntries(data.scores)
        };
        saveLeaderboardCache();
    } catch (error) {
        console.warn("Servidor indisponivel. Salvando leaderboard local.", error);
        atualizarRegistroLeaderboard(nome, scoreAtual);
    }

    renderizarLeaderboard(leaderboardData.scores);
    verificarConquistas();

    input.value = "";
    mostrarAnimacaoCompra(`Score salvo para ${nome}!`);
}

function iniciarAutoClick() {
    if (autoClickInterval) {
        clearInterval(autoClickInterval);
    }

    autoClickInterval = setInterval(() => {
        const passive = getPassivePerSecond();
        if (passive <= 0) {
            return;
        }

        adicionarPontos(passive);
        atualizarPontos();
        checkTarget();
        verificarConquistas();
        saveGameState();
    }, 1000);
}

function registrarCliquePrincipal() {
    adicionarPontos(getClickPower());
    gameState.totalClicks += 1;

    atualizarPontos();
    checkTarget();
    verificarConquistas();
    saveGameState();
}

async function initGame() {
    loadGameState();
    await carregarLeaderboard();

    applyCurrentSkinVisual();
    renderShop();
    renderizarSkins();
    renderizarConquistas();
    renderPointers();
    atualizarPontos();
    atualizarItens();

    verificarConquistas();
    iniciarAutoClick();

    document.getElementById("kanye").addEventListener("click", registrarCliquePrincipal);
    window.addEventListener("resize", atualizarCentroPonteiros);
    window.addEventListener("scroll", atualizarCentroPonteiros, { passive: true });
    setTimeout(atualizarCentroPonteiros, 0);
}

initGame();
