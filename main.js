const TARGET_POINTS = 67;
const SHOP_PRICE_MULTIPLIER = 1.65;
const UPGRADE_PRICE_MULTIPLIER = 1.9;
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
const REBIRTH_BASE_COST = 250000;
const REBIRTH_COST_MULTIPLIER = 2.05;
const REBIRTH_BONUS_PER_LEVEL = 12;
const POINTER_SVG_PATH = "assets/items/pointer.svg";
const DEFAULT_MUSIC_VOLUME = 0.45;
const DEFAULT_CLICK_SFX_ENABLED = true;
const XP_BASE_REQUIREMENT = 25;
const XP_LEVEL_GROWTH = 1.28;
const CLICK_POP_AUDIO_PATH = "assets/music/pop.mp3";
const CLICK_POP_VOLUME = 0.55;
const CASH_SFX_AUDIO_PATH = "assets/music/cash.mp3";
const CASH_SFX_VOLUME = 0.72;
const ERROR_SFX_AUDIO_PATH = "assets/music/error.mp3";
const ERROR_SFX_VOLUME = 0.78;
const EVENT_SCRATCH_VOLUME = 0.82;
const LEADERBOARD_AUTO_SYNC_MS = 12000;
const DOUBLE_EVENT_MULTIPLIER = 2;
const DOUBLE_EVENT_DURATION_MS = 30000;
const DOUBLE_EVENT_MIN_INTERVAL_MS = 70000;
const DOUBLE_EVENT_MAX_INTERVAL_MS = 140000;
const GOLDEN_CLICK_MIN_INTERVAL_MS = 35000;
const GOLDEN_CLICK_MAX_INTERVAL_MS = 95000;
const GOLDEN_CLICK_VISIBLE_MS = 16000;
const GOLDEN_CLICK_MIN_REWARD = 600;
const EVENT_SCRATCH_AUDIO_PATH = "assets/music/scratch.mp3";
// Defina aqui a imagem fixa do golden click.
const GOLDEN_CLICK_IMAGE = "assets/kanye/kanyeRunaway.jpg";
const GOLDEN_CLICK_KANYE_IMAGES = [
    "assets/kanye/41-414314_transparent-kanye-head-png-kanye-west-head-png.png",
    "assets/kanye/48bb3318d8ae27f31eba3f1db412d15d.752x752x1.jpg",
    "assets/kanye/https___hypebeast.com_image_2017_09_kanye-west-debuts-new-adidas-yeezy-boost-700-wave-runners-0001.avif",
    "assets/kanye/images (1).jpg",
    "assets/kanye/Kanye-West-Yeezy-Season-3-tlop-msg-2016-billboard-650.webp",
    "assets/kanye/kanye-west.gif",
    "assets/kanye/kanyeRunaway.jpg",
    "assets/kanye/maxresdefault.jpg"
];
const LEADERBOARD_DEFAULT_SCORES = [
    {
        nome: "KanyeFan",
        score: 1200,
        rebirths: 0,
        criadoEm: "2026-04-25T12:00:00.000Z"
    },
    {
        nome: "Yeezus",
        score: 800,
        rebirths: 0,
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

const SPECIAL_UPGRADES = [
    {
        id: "auto_speed",
        nome: "Clock Boost",
        descricao: "Autoclick mais rapido",
        precoBase: 1800,
        valorPercent: 12,
        maxNivel: 8
    },
    {
        id: "global_gain",
        nome: "Hype Engine",
        descricao: "Aumenta o ganho total",
        precoBase: 2600,
        valorPercent: 10,
        maxNivel: 10
    },
    {
        id: "xp_click",
        nome: "Academia de Flow",
        descricao: "Aumenta o XP ganho por clique manual",
        precoBase: 3200,
        valorPercent: 1,
        maxNivel: 12
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

const MUSIC_TRACKS = [
    {
        id: 1,
        nome: "Silencio",
        preco: 0,
        bonus: 0,
        descricao: "Sem bonus de musica",
        audio: ""
    },
    {
        id: 2,
        nome: "Stronger",
        preco: 18000,
        bonus: 55,
        descricao: "+55% no ganho de pontos",
        audio: "assets/music/stronger.mp3"
    },
    {
        id: 3,
        nome: "POWER",
        preco: 45000,
        bonus: 95,
        descricao: "+95% no ganho de pontos",
        audio: "assets/music/power.mp3"
    },
    {
        id: 4,
        nome: "Black Skinhead",
        preco: 98000,
        bonus: 145,
        descricao: "+145% no ganho de pontos",
        audio: "assets/music/black-skinhead.mp3"
    },
    {
        id: 5,
        nome: "Runaway Mix",
        preco: 170000,
        bonus: 210,
        descricao: "+210% no ganho de pontos",
        audio: "assets/music/runaway-mix.mp3"
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
    { id: 1, nome: "Eu sou Deus", descricao: "Chegue a 67 pontos", tipo: "points", meta: 67, recompensa: { pontos: 50 } },
    { id: 2, nome: "Warm Up", descricao: "Chegue a 250 pontos", tipo: "points", meta: 250 },
    { id: 3, nome: "Dropout", descricao: "Chegue a 500 pontos", tipo: "points", meta: 500, recompensa: { pontos: 120 } },
    { id: 4, nome: "Graduation", descricao: "Chegue a 1.000 pontos", tipo: "points", meta: 1000 },
    { id: 5, nome: "Superstar", descricao: "Chegue a 2.500 pontos", tipo: "points", meta: 2500, recompensa: { pontos: 300 } },
    { id: 6, nome: "Headliner", descricao: "Chegue a 5.000 pontos", tipo: "points", meta: 5000 },
    { id: 7, nome: "Legend", descricao: "Chegue a 10.000 pontos", tipo: "points", meta: 10000, recompensa: { pontos: 800 } },
    { id: 8, nome: "Untouchable", descricao: "Chegue a 25.000 pontos", tipo: "points", meta: 25000, recompensa: { pontos: 2000 } },
    { id: 27, nome: "Runaway Rich", descricao: "Chegue a 50.000 pontos", tipo: "points", meta: 50000, recompensa: { pontos: 5000 } },
    { id: 28, nome: "Billionaire Mindset", descricao: "Chegue a 100.000 pontos", tipo: "points", meta: 100000, recompensa: { pontos: 12000 } },

    { id: 9, nome: "First Steps", descricao: "Faca 100 cliques", tipo: "clicks", meta: 100 },
    { id: 10, nome: "Hand Cramp", descricao: "Faca 500 cliques", tipo: "clicks", meta: 500, recompensa: { pontos: 180 } },
    { id: 11, nome: "No Breaks", descricao: "Faca 1.500 cliques", tipo: "clicks", meta: 1500 },
    { id: 12, nome: "Machine Hands", descricao: "Faca 5.000 cliques", tipo: "clicks", meta: 5000, recompensa: { pontos: 900 } },
    { id: 29, nome: "Finger Frenzy", descricao: "Faca 10.000 cliques", tipo: "clicks", meta: 10000, recompensa: { pontos: 1800 } },

    { id: 13, nome: "Automation", descricao: "Tenha 10 pontos/s", tipo: "passive", meta: 10 },
    { id: 14, nome: "Factory", descricao: "Tenha 50 pontos/s", tipo: "passive", meta: 50, recompensa: { pontos: 250 } },
    { id: 15, nome: "Industry", descricao: "Tenha 200 pontos/s", tipo: "passive", meta: 200 },
    { id: 16, nome: "Mega Label", descricao: "Tenha 500 pontos/s", tipo: "passive", meta: 500, recompensa: { pontos: 1200 } },
    { id: 30, nome: "Streaming Empire", descricao: "Tenha 1.000 pontos/s", tipo: "passive", meta: 1000, recompensa: { pontos: 3500 } },

    { id: 17, nome: "Auto Nation", descricao: "Compre 5 Auto Clickers", tipo: "item_quantity", itemId: "auto_clicker", meta: 5 },
    { id: 18, nome: "Studio Mogul", descricao: "Compre 10 Studio Teams", tipo: "item_quantity", itemId: "studio_team", meta: 10, recompensa: { pontos: 350 } },
    { id: 19, nome: "Tour Master", descricao: "Compre 8 Tour Bus", tipo: "item_quantity", itemId: "tour_bus", meta: 8 },
    { id: 20, nome: "Click God", descricao: "Compre 10 Click +5", tipo: "item_quantity", itemId: "click_plus", meta: 10, recompensa: { pontos: 420 } },
    { id: 31, nome: "Farm Lord", descricao: "Compre 6 Stream Farms", tipo: "item_quantity", itemId: "stream_farm", meta: 6, recompensa: { pontos: 1500 } },
    { id: 32, nome: "Campaign Machine", descricao: "Compre 6 Yeezy Campaigns", tipo: "item_quantity", itemId: "yeezy_campaign", meta: 6, recompensa: { pontos: 1800 } },

    { id: 21, nome: "Fashion Week", descricao: "Compre 3 skins", tipo: "skins_owned", meta: 3 },
    { id: 22, nome: "Wardrobe", descricao: "Compre 5 skins", tipo: "skins_owned", meta: 5, recompensa: { pontos: 500 } },
    { id: 23, nome: "Style Icon", descricao: "Use bonus de skin +20%", tipo: "skin_bonus", meta: 20 },
    { id: 24, nome: "Fashion Empire", descricao: "Use bonus de skin +35%", tipo: "skin_bonus", meta: 35, recompensa: { pontos: 1000 } },
    { id: 33, nome: "Collector Cut", descricao: "Desbloqueie 5 musicas", tipo: "musics_owned", meta: 5, recompensa: { pontos: 2200 } },

    { id: 25, nome: "Ranked", descricao: "Salve 1 score na leaderboard", tipo: "leaderboard_entries", meta: 1 },
    { id: 26, nome: "Competition", descricao: "Tenha 5 scores na leaderboard", tipo: "leaderboard_entries", meta: 5, recompensa: { pontos: 800 } },
    { id: 34, nome: "Reborn", descricao: "Faca 1 rebirth", tipo: "rebirths", meta: 1, recompensa: { pontos: 2000 } },
    { id: 35, nome: "Phoenix Loop", descricao: "Faca 3 rebirths", tipo: "rebirths", meta: 3, recompensa: { pontos: 7000 } },
    { id: 36, nome: "Golden Hunter", descricao: "Colete 5 golden clicks", tipo: "golden_clicks", meta: 5, recompensa: { pontos: 1500 } },
    { id: 37, nome: "Upgrade Fanatic", descricao: "Compre 8 boosts especiais", tipo: "special_upgrades", meta: 8, recompensa: { pontos: 1800 } }
];

let gameState = createDefaultGameState();
let leaderboardData = { scores: [] };
let autoClickInterval = null;
let conquistasPaginaAtual = 1;
let musicPlayer = null;
let currentPlayingMusicId = 0;
let leaderboardAutoSyncInterval = null;
let leaderboardSyncInProgress = false;
let doubleEventActive = false;
let doubleEventEndsAt = 0;
let doubleEventTickInterval = null;
let doubleEventStartTimeout = null;
let goldenClickVisible = false;
let goldenClickSpawnTimeout = null;
let goldenClickHideTimeout = null;
let eventSfxPlayer = null;
let pendingRebirthGain = 0;
const activeClickSfxPlayers = new Set();
let collectedGoldenClicks = 0;

function createDefaultGameState() {
    const shop = createDefaultShopState();
    const upgrades = createDefaultUpgradesState();
    const skins = createDefaultSkinsState();
    const musics = createDefaultMusicsState();

    return {
        nickname: gerarNicknamePadrao(),
        musicVolume: DEFAULT_MUSIC_VOLUME,
        clickSfxEnabled: DEFAULT_CLICK_SFX_ENABLED,
        leaderboardRegistered: false,
        leaderboardBestScore: 0,
        points: 0,
        totalClicks: 0,
        xpLevel: 1,
        xpCurrent: 0,
        shop,
        upgrades,
        skins,
        musics,
        currentSkinId: 1,
        currentMusicId: 1,
        rebirthCount: 0,
        unlockedAchievements: [],
        claimedAchievementRewards: [],
        targetAlertShown: false
    };
}

function createDefaultShopState() {
    const shop = {};
    SHOP_ITEMS.forEach((item) => {
        shop[item.id] = {
            quantidade: 0,
            preco: item.precoBase
        };
    });
    return shop;
}

function createDefaultUpgradesState() {
    const upgrades = {};
    SPECIAL_UPGRADES.forEach((upgrade) => {
        upgrades[upgrade.id] = {
            nivel: 0,
            preco: upgrade.precoBase
        };
    });
    return upgrades;
}

function gerarNicknamePadrao() {
    const random = Math.floor(1000 + (Math.random() * 9000));
    return `Player${random}`;
}

function createDefaultSkinsState() {
    const skins = {};
    SKINS.forEach((skin) => {
        skins[skin.id] = skin.id === 1;
    });
    return skins;
}

function createDefaultMusicsState() {
    const musics = {};
    MUSIC_TRACKS.forEach((music) => {
        musics[music.id] = music.id === 1;
    });
    return musics;
}

function formatNumber(value) {
    return new Intl.NumberFormat("pt-BR").format(Math.floor(value));
}

function safeNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function clampVolumePercent(value) {
    return Math.min(1, Math.max(0, safeNumber(value, DEFAULT_MUSIC_VOLUME)));
}

function formatMultiplier(multiplier) {
    return safeNumber(multiplier, 1).toFixed(2).replace(".", ",");
}

function randomRange(min, max) {
    const safeMin = Math.floor(safeNumber(min, 0));
    const safeMax = Math.floor(safeNumber(max, safeMin));
    const start = Math.min(safeMin, safeMax);
    const end = Math.max(safeMin, safeMax);
    return Math.floor(Math.random() * ((end - start) + 1)) + start;
}

function getEventMultiplier() {
    return doubleEventActive ? DOUBLE_EVENT_MULTIPLIER : 1;
}

function getDoubleEventSecondsLeft() {
    if (!doubleEventActive) {
        return 0;
    }
    return Math.max(0, Math.ceil((doubleEventEndsAt - Date.now()) / 1000));
}

function getLeaderboardNickname() {
    const nickname = normalizarNome(gameState.nickname);
    return nickname || gerarNicknamePadrao();
}

function sumOwnedSkins() {
    return SKINS.filter((skin) => gameState.skins[skin.id]).length;
}

function sumOwnedMusics() {
    return MUSIC_TRACKS.filter((music) => gameState.musics[music.id]).length;
}

function getCurrentSkin() {
    return SKINS.find((skin) => skin.id === gameState.currentSkinId) || SKINS[0];
}

function getCurrentMusic() {
    return MUSIC_TRACKS.find((music) => music.id === gameState.currentMusicId) || MUSIC_TRACKS[0];
}

function getMusicById(id) {
    return MUSIC_TRACKS.find((music) => music.id === id) || null;
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

function getMusicBonusPercent() {
    const music = getCurrentMusic();
    return music ? music.bonus : 0;
}

function pararMusicaAtual() {
    if (!musicPlayer) {
        currentPlayingMusicId = 0;
        return;
    }

    musicPlayer.pause();
    musicPlayer.removeAttribute("src");
    musicPlayer.load();
    currentPlayingMusicId = 0;
}

function aplicarVolumeMusica(volume = gameState.musicVolume) {
    const nextVolume = clampVolumePercent(volume);
    gameState.musicVolume = nextVolume;

    if (musicPlayer) {
        musicPlayer.volume = nextVolume;
    }
}

async function tocarMusicaPorId(musicId, fromUserAction = false) {
    const music = getMusicById(musicId);
    if (!music || !music.audio) {
        pararMusicaAtual();
        return true;
    }

    if (!musicPlayer) {
        musicPlayer = new Audio();
        musicPlayer.loop = true;
        musicPlayer.preload = "auto";
    }

    if (currentPlayingMusicId !== music.id || musicPlayer.src.indexOf(music.audio) === -1) {
        musicPlayer.pause();
        musicPlayer.src = music.audio;
        musicPlayer.currentTime = 0;
        currentPlayingMusicId = music.id;
    }

    aplicarVolumeMusica(gameState.musicVolume);

    try {
        await musicPlayer.play();
        return true;
    } catch (error) {
        if (fromUserAction) {
            alert(`Nao foi possivel tocar ${music.nome}. Confirme o arquivo em ${music.audio}.`);
        } else {
            console.warn(`Nao foi possivel iniciar ${music.nome} automaticamente.`, error);
        }
        return false;
    }
}

function sincronizarMusicaAtiva(fromUserAction = false) {
    const currentMusic = getCurrentMusic();
    if (!currentMusic || currentMusic.id === 1 || !currentMusic.audio) {
        pararMusicaAtual();
        return;
    }

    tocarMusicaPorId(currentMusic.id, fromUserAction);
}

function tocarSomEventoDouble() {
    if (!eventSfxPlayer) {
        eventSfxPlayer = new Audio(EVENT_SCRATCH_AUDIO_PATH);
        eventSfxPlayer.preload = "auto";
    }

    eventSfxPlayer.currentTime = 0;
    eventSfxPlayer.volume = EVENT_SCRATCH_VOLUME;
    eventSfxPlayer.play().catch((error) => {
        console.warn("Nao foi possivel tocar o som do evento x2.", error);
    });
}

function tocarSomCliquePop() {
    if (!gameState.clickSfxEnabled) {
        return;
    }

    const clickSfx = new Audio(CLICK_POP_AUDIO_PATH);
    clickSfx.volume = CLICK_POP_VOLUME;
    activeClickSfxPlayers.add(clickSfx);

    const finalizar = () => {
        activeClickSfxPlayers.delete(clickSfx);
    };
    clickSfx.addEventListener("ended", finalizar, { once: true });
    clickSfx.addEventListener("error", finalizar, { once: true });

    clickSfx.play().catch(() => {
        finalizar();
    });
}

function tocarSomCompraCash() {
    const cashSfx = new Audio(CASH_SFX_AUDIO_PATH);
    cashSfx.volume = CASH_SFX_VOLUME;

    cashSfx.play().catch((error) => {
        console.warn("Nao foi possivel tocar o som de compra.", error);
    });
}

function tocarSomErroCompra() {
    const errorSfx = new Audio(ERROR_SFX_AUDIO_PATH);
    errorSfx.volume = ERROR_SFX_VOLUME;

    errorSfx.play().catch((error) => {
        console.warn("Nao foi possivel tocar o som de erro de compra.", error);
    });
}

function sinalizarBotaoCompraInvalida(buttonEl) {
    if (!buttonEl) {
        return;
    }

    if (buttonEl._invalidPurchaseTimeoutId) {
        clearTimeout(buttonEl._invalidPurchaseTimeoutId);
    }

    buttonEl.classList.remove("purchase-error");
    // Reinicia a animacao para funcionar em cliques consecutivos.
    void buttonEl.offsetWidth;
    buttonEl.classList.add("purchase-error");
    buttonEl._invalidPurchaseTimeoutId = setTimeout(() => {
        buttonEl.classList.remove("purchase-error");
        buttonEl._invalidPurchaseTimeoutId = null;
    }, 1800);
}

function tratarCompraInvalida(buttonEl) {
    tocarSomErroCompra();
    sinalizarBotaoCompraInvalida(buttonEl);
}

function getRebirthRequirement(rebirthCount = gameState.rebirthCount) {
    return Math.max(1, Math.floor(REBIRTH_BASE_COST * Math.pow(REBIRTH_COST_MULTIPLIER, rebirthCount)));
}

function getRebirthBonusPercent() {
    return Math.max(0, Math.floor(gameState.rebirthCount * REBIRTH_BONUS_PER_LEVEL));
}

function getTotalBonusPercent() {
    return getSkinBonusPercent() + getMusicBonusPercent() + getRebirthBonusPercent() + getGlobalGainUpgradePercent();
}

function getGainMultiplier() {
    return (1 + (getTotalBonusPercent() / 100)) * getEventMultiplier();
}

function limparTickEventoDouble() {
    if (doubleEventTickInterval) {
        clearInterval(doubleEventTickInterval);
        doubleEventTickInterval = null;
    }
}

function agendarProximoEventoDouble() {
    if (doubleEventStartTimeout) {
        clearTimeout(doubleEventStartTimeout);
    }

    const delay = randomRange(DOUBLE_EVENT_MIN_INTERVAL_MS, DOUBLE_EVENT_MAX_INTERVAL_MS);
    doubleEventStartTimeout = setTimeout(() => {
        iniciarEventoDouble();
    }, delay);
}

function encerrarEventoDouble() {
    if (!doubleEventActive) {
        return;
    }

    doubleEventActive = false;
    doubleEventEndsAt = 0;
    document.body.classList.remove("double-event-rgb");
    tocarSomEventoDouble();
    limparTickEventoDouble();
    atualizarPontos();
    mostrarAnimacaoCompra("Evento x2 encerrou.");
    agendarProximoEventoDouble();
}

function iniciarEventoDouble() {
    if (doubleEventActive) {
        return;
    }

    doubleEventActive = true;
    doubleEventEndsAt = Date.now() + DOUBLE_EVENT_DURATION_MS;
    document.body.classList.add("double-event-rgb");
    tocarSomEventoDouble();
    mostrarAnimacaoCompra("Evento relampago: x2 por 30s!");
    atualizarPontos();
    limparTickEventoDouble();

    doubleEventTickInterval = setInterval(() => {
        if (Date.now() >= doubleEventEndsAt) {
            encerrarEventoDouble();
            return;
        }
        atualizarBuffsHUD();
    }, 250);
}

function getGoldenButton() {
    let button = document.getElementById("golden-click");
    if (button) {
        return button;
    }

    const container = document.querySelector(".clicker-container");
    if (!container) {
        return null;
    }

    button = document.createElement("button");
    button.id = "golden-click";
    button.className = "golden-click-btn";
    button.type = "button";
    button.setAttribute("aria-label", "Golden click raro");
    button.addEventListener("click", coletarGoldenClick);

    container.appendChild(button);
    return button;
}

function getGoldenClickImagePath() {
    const imagemFixa = String(GOLDEN_CLICK_IMAGE || "").trim();
    if (imagemFixa) {
        return imagemFixa;
    }

    const index = Math.floor(Math.random() * GOLDEN_CLICK_KANYE_IMAGES.length);
    return GOLDEN_CLICK_KANYE_IMAGES[index] || GOLDEN_CLICK_KANYE_IMAGES[0];
}

function posicionarGoldenClick() {
    const container = document.querySelector(".clicker-container");
    const kanye = document.getElementById("kanye");
    const button = getGoldenButton();
    if (!container || !kanye || !button) {
        return;
    }

    const containerRect = container.getBoundingClientRect();
    const kanyeRect = kanye.getBoundingClientRect();
    const size = button.offsetWidth || 84;
    const centerX = (kanyeRect.left - containerRect.left) + (kanyeRect.width / 2);
    const centerY = (kanyeRect.top - containerRect.top) + (kanyeRect.height / 2);
    const radius = Math.max(124, (Math.min(kanyeRect.width, kanyeRect.height) * 0.64));
    const angle = Math.random() * (Math.PI * 2);
    const left = Math.max(8, Math.min(containerRect.width - size - 8, centerX + (Math.cos(angle) * radius) - (size / 2)));
    const top = Math.max(8, Math.min(containerRect.height - size - 8, centerY + (Math.sin(angle) * radius) - (size / 2)));

    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
}

function agendarProximoGoldenClick() {
    if (goldenClickSpawnTimeout) {
        clearTimeout(goldenClickSpawnTimeout);
    }

    const delay = randomRange(GOLDEN_CLICK_MIN_INTERVAL_MS, GOLDEN_CLICK_MAX_INTERVAL_MS);
    goldenClickSpawnTimeout = setTimeout(() => {
        mostrarGoldenClick();
    }, delay);
}

function esconderGoldenClick(foiColetado = false) {
    if (goldenClickHideTimeout) {
        clearTimeout(goldenClickHideTimeout);
        goldenClickHideTimeout = null;
    }

    const button = getGoldenButton();
    if (button) {
        button.classList.remove("show");
        button.setAttribute("aria-hidden", "true");
    }

    goldenClickVisible = false;
    atualizarBuffsHUD();

    if (!foiColetado) {
        agendarProximoGoldenClick();
    }
}

function mostrarGoldenClick() {
    if (goldenClickVisible) {
        return;
    }

    const button = getGoldenButton();
    if (!button) {
        agendarProximoGoldenClick();
        return;
    }

    goldenClickVisible = true;
    button.style.backgroundImage = `url("${getGoldenClickImagePath()}")`;
    posicionarGoldenClick();
    button.classList.add("show");
    button.removeAttribute("aria-hidden");
    mostrarAnimacaoCompra("Golden click apareceu!");
    atualizarBuffsHUD();

    if (goldenClickHideTimeout) {
        clearTimeout(goldenClickHideTimeout);
    }
    goldenClickHideTimeout = setTimeout(() => {
        esconderGoldenClick(false);
    }, GOLDEN_CLICK_VISIBLE_MS);
}

function getGoldenClickBaseReward() {
    const clickPower = getClickPower();
    const passive = getPassivePerSecond();
    const scaledReward = Math.floor((clickPower * 55) + (passive * 24));
    return Math.max(GOLDEN_CLICK_MIN_REWARD, scaledReward);
}

function coletarGoldenClick() {
    if (!goldenClickVisible) {
        return;
    }

    const recompensaBase = getGoldenClickBaseReward();
    const ganhoTotal = adicionarPontos(recompensaBase);
    gameState.totalClicks += 1;
    collectedGoldenClicks += 1;

    esconderGoldenClick(true);
    agendarProximoGoldenClick();
    atualizarPontos();
    checkTarget();
    verificarConquistas();
    saveGameState();

    mostrarAnimacaoCompra(`Golden click! +${formatNumber(ganhoTotal)} pontos`);
}

function atualizarPosicaoEventosVisuais() {
    if (goldenClickVisible) {
        posicionarGoldenClick();
    }
}

function iniciarEventosAleatorios() {
    getGoldenButton();
    agendarProximoEventoDouble();
    agendarProximoGoldenClick();
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

function getUpgradeLevel(upgradeId) {
    const state = gameState.upgrades && gameState.upgrades[upgradeId];
    return Math.max(0, Math.floor(safeNumber(state ? state.nivel : 0, 0)));
}

function getAutoSpeedBonusPercent() {
    const upgrade = SPECIAL_UPGRADES.find((entry) => entry.id === "auto_speed");
    if (!upgrade) {
        return 0;
    }
    return getUpgradeLevel(upgrade.id) * upgrade.valorPercent;
}

function getGlobalGainUpgradePercent() {
    const upgrade = SPECIAL_UPGRADES.find((entry) => entry.id === "global_gain");
    if (!upgrade) {
        return 0;
    }
    return getUpgradeLevel(upgrade.id) * upgrade.valorPercent;
}

function getXpGainPerClickUpgradeValue() {
    const upgrade = SPECIAL_UPGRADES.find((entry) => entry.id === "xp_click");
    if (!upgrade) {
        return 0;
    }
    return getUpgradeLevel(upgrade.id) * upgrade.valorPercent;
}

function getAutoClickIntervalMs() {
    const speedBonus = getAutoSpeedBonusPercent();
    const speedMultiplier = 1 + (speedBonus / 100);
    return Math.max(120, Math.floor(1000 / speedMultiplier));
}

function getTotalOwnedItems() {
    return SHOP_ITEMS.reduce((acc, item) => acc + gameState.shop[item.id].quantidade, 0);
}

function getXpRequiredForLevel(level = gameState.xpLevel) {
    const safeLevel = Math.max(1, Math.floor(safeNumber(level, 1)));
    return Math.max(10, Math.floor(XP_BASE_REQUIREMENT * (XP_LEVEL_GROWTH ** (safeLevel - 1))));
}

function adicionarXpPorClique(amount = 1) {
    let xpToAdd = Math.max(0, Math.floor(safeNumber(amount, 0)));
    if (xpToAdd <= 0) {
        return;
    }

    gameState.xpLevel = Math.max(1, Math.floor(safeNumber(gameState.xpLevel, 1)));
    gameState.xpCurrent = Math.max(0, Math.floor(safeNumber(gameState.xpCurrent, 0)));

    while (xpToAdd > 0) {
        const required = getXpRequiredForLevel(gameState.xpLevel);
        const faltando = Math.max(1, required - gameState.xpCurrent);
        const ganho = Math.min(xpToAdd, faltando);

        gameState.xpCurrent += ganho;
        xpToAdd -= ganho;

        if (gameState.xpCurrent >= required) {
            gameState.xpCurrent -= required;
            gameState.xpLevel += 1;
        }
    }
}

function getDescricaoBonusUpgrade(upgrade, level) {
    const bonusAtual = formatNumber(level * upgrade.valorPercent);
    if (upgrade.id === "xp_click") {
        return `XP por clique atual: +${bonusAtual}`;
    }
    return `Bonus atual: +${bonusAtual}%`;
}

function calcularRebirthsPossiveisComPontos(pointsValue, rebirthCountBase = gameState.rebirthCount) {
    let rebirths = 0;
    let pontosRestantes = Math.max(0, Math.floor(safeNumber(pointsValue, 0)));
    let rebirthAtual = Math.max(0, Math.floor(safeNumber(rebirthCountBase, 0)));

    while (rebirths < 50) {
        const custo = getRebirthRequirement(rebirthAtual);
        if (pontosRestantes < custo) {
            break;
        }

        pontosRestantes -= custo;
        rebirths += 1;
        rebirthAtual += 1;
    }

    return rebirths;
}

function atualizarRebirthUI() {
    const requirement = getRebirthRequirement();
    const rebirthsPossiveis = calcularRebirthsPossiveisComPontos(gameState.points);
    const bonusPercent = getRebirthBonusPercent();

    const statusEl = document.getElementById("rebirth-status");
    if (statusEl) {
        statusEl.textContent = `Rebirths: ${formatNumber(gameState.rebirthCount)} | Bonus: +${formatNumber(bonusPercent)}%`;
    }

    const nextEl = document.getElementById("rebirth-next");
    if (nextEl) {
        nextEl.textContent = rebirthsPossiveis > 0
            ? `Pronto para rebirth: +${formatNumber(rebirthsPossiveis)} agora`
            : `Proximo em ${formatNumber(requirement)} pontos`;
    }

    const floatButton = document.getElementById("rebirth-float-btn");
    if (floatButton) {
        floatButton.classList.toggle("show", rebirthsPossiveis > 0);
    }
}

function resetarProgressaoParaRebirth() {
    gameState.points = 0;
    gameState.shop = createDefaultShopState();
    gameState.upgrades = createDefaultUpgradesState();
    gameState.skins = createDefaultSkinsState();
    gameState.currentSkinId = 1;
    gameState.unlockedAchievements = [];
    gameState.targetAlertShown = false;
    conquistasPaginaAtual = 1;

    applyCurrentSkinVisual();
}

function tentarRebirth() {
    const rebirthsGanhos = calcularRebirthsPossiveisComPontos(gameState.points);
    if (rebirthsGanhos <= 0) {
        alert(`Voce precisa de ${formatNumber(getRebirthRequirement())} pontos para fazer rebirth.`);
        return;
    }

    const bonusAtual = getRebirthBonusPercent();
    const bonusNovo = bonusAtual + (rebirthsGanhos * REBIRTH_BONUS_PER_LEVEL);
    pendingRebirthGain = rebirthsGanhos;

    const summary = document.getElementById("rebirth-confirm-summary");
    if (summary) {
        summary.textContent =
            `Voce ganhara ${formatNumber(rebirthsGanhos)} rebirth(s). Bonus: +${formatNumber(bonusAtual)}% -> +${formatNumber(bonusNovo)}%.`;
    }

    document.getElementById("rebirth-confirm").style.display = "flex";
}

function fecharConfirmacaoRebirth() {
    pendingRebirthGain = 0;
    const modal = document.getElementById("rebirth-confirm");
    if (modal) {
        modal.style.display = "none";
    }
}

function confirmarRebirth() {
    const rebirthsGanhos = Math.max(0, Math.floor(safeNumber(pendingRebirthGain, 0)));
    if (rebirthsGanhos <= 0) {
        fecharConfirmacaoRebirth();
        return;
    }

    gameState.rebirthCount += rebirthsGanhos;
    resetarProgressaoParaRebirth();
    fecharConfirmacaoRebirth();

    renderShop();
    renderizarSkins();
    renderizarConquistas();
    renderPointers();
    atualizarPontos();
    atualizarItens();
    verificarConquistas();
    saveGameState();

    mostrarAnimacaoCompra(`Rebirth +${rebirthsGanhos}! Bonus permanente aumentado.`);
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

        const loadedNickname = normalizarNome(parsed.nickname);
        defaultState.nickname = loadedNickname || gerarNicknamePadrao();
        defaultState.musicVolume = clampVolumePercent(safeNumber(parsed.musicVolume, DEFAULT_MUSIC_VOLUME));
        defaultState.clickSfxEnabled = parsed.clickSfxEnabled !== false;
        defaultState.leaderboardRegistered = Boolean(parsed.leaderboardRegistered);
        defaultState.leaderboardBestScore = Math.max(0, Math.floor(safeNumber(parsed.leaderboardBestScore, 0)));

        defaultState.points = Math.max(0, Math.floor(safeNumber(parsed.points, 0)));
        defaultState.totalClicks = Math.max(0, Math.floor(safeNumber(parsed.totalClicks, 0)));
        defaultState.xpLevel = Math.max(1, Math.floor(safeNumber(parsed.xpLevel, 1)));
        const xpMax = getXpRequiredForLevel(defaultState.xpLevel);
        defaultState.xpCurrent = Math.max(0, Math.min(xpMax - 1, Math.floor(safeNumber(parsed.xpCurrent, 0))));
        defaultState.rebirthCount = Math.max(0, Math.floor(safeNumber(parsed.rebirthCount, 0)));
        defaultState.targetAlertShown = Boolean(parsed.targetAlertShown);

        if (parsed.shop && typeof parsed.shop === "object") {
            SHOP_ITEMS.forEach((item) => {
                const loadedItem = parsed.shop[item.id] || {};
                const quantidade = Math.max(0, Math.floor(safeNumber(loadedItem.quantidade, 0)));
                const preco = Math.max(item.precoBase, Math.floor(safeNumber(loadedItem.preco, item.precoBase)));
                defaultState.shop[item.id] = { quantidade, preco };
            });
        }

        if (parsed.upgrades && typeof parsed.upgrades === "object") {
            SPECIAL_UPGRADES.forEach((upgrade) => {
                const loadedUpgrade = parsed.upgrades[upgrade.id] || {};
                const nivel = Math.min(
                    upgrade.maxNivel,
                    Math.max(0, Math.floor(safeNumber(loadedUpgrade.nivel, 0)))
                );
                const preco = Math.max(
                    upgrade.precoBase,
                    Math.floor(safeNumber(loadedUpgrade.preco, upgrade.precoBase))
                );
                defaultState.upgrades[upgrade.id] = { nivel, preco };
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

        if (parsed.musics && typeof parsed.musics === "object") {
            MUSIC_TRACKS.forEach((music) => {
                if (music.id === 1) {
                    defaultState.musics[music.id] = true;
                } else {
                    defaultState.musics[music.id] = Boolean(parsed.musics[music.id]);
                }
            });
        }

        const currentSkinId = Math.floor(safeNumber(parsed.currentSkinId, 1));
        defaultState.currentSkinId = defaultState.skins[currentSkinId] ? currentSkinId : 1;
        const currentMusicId = Math.floor(safeNumber(parsed.currentMusicId, 1));
        defaultState.currentMusicId = defaultState.musics[currentMusicId] ? currentMusicId : 1;

        if (Array.isArray(parsed.unlockedAchievements)) {
            const valid = new Set(ACHIEVEMENTS.map((a) => a.id));
            defaultState.unlockedAchievements = parsed.unlockedAchievements
                .map((id) => Math.floor(safeNumber(id, 0)))
                .filter((id) => valid.has(id));
        }

        if (Array.isArray(parsed.claimedAchievementRewards)) {
            const valid = new Set(ACHIEVEMENTS.map((a) => a.id));
            defaultState.claimedAchievementRewards = parsed.claimedAchievementRewards
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
            rebirths: Math.max(0, Math.floor(safeNumber(entry.rebirths, 0))),
            criadoEm: entry.criadoEm || new Date().toISOString()
        }))
        .filter((entry) => entry.nome.length > 0);

    const bestByPlayer = new Map();

    sanitized.forEach((entry) => {
        const key = entry.nome.toLowerCase();
        const existing = bestByPlayer.get(key);
        if (!existing || entry.score > existing.score || (entry.score === existing.score && entry.rebirths > existing.rebirths)) {
            bestByPlayer.set(key, entry);
        }
    });

    return Array.from(bestByPlayer.values())
        .sort((a, b) => (b.score - a.score) || (b.rebirths - a.rebirths))
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

    atualizarPosicaoEventosVisuais();
}

function criarPointer(indice, totalPointers) {
    const pointer = document.createElement("img");
    pointer.src = POINTER_SVG_PATH;
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

function mostrarFeedbackPontos(quantidade, origem = "manual") {
    const valor = Math.max(0, Math.floor(safeNumber(quantidade, 0)));
    if (valor <= 0) {
        return;
    }

    const metrics = getKanyeButtonMetrics();
    const spread = origem === "auto" ? 88 : 62;
    const offsetX = (Math.random() * (spread * 2)) - spread;
    const offsetY = -12 - (Math.random() * 34);

    const feedback = document.createElement("div");
    feedback.className = `click-gain-feedback ${origem === "auto" ? "auto" : "manual"}`;
    feedback.textContent = `+${formatNumber(valor)}`;
    feedback.style.left = `${metrics.x + offsetX}px`;
    feedback.style.top = `${metrics.y + offsetY}px`;
    document.body.appendChild(feedback);

    setTimeout(() => feedback.remove(), 700);
}

function atualizarBuffsHUD() {
    const hud = document.getElementById("buffs-hud");
    if (!hud) {
        return;
    }

    const totalBonus = getTotalBonusPercent();

    hud.innerHTML = `
        <div class="buffs-grid">
            <div class="buff-pill">
                <span class="buff-label">Aumento total de ganho</span>
                <span class="buff-value">+${formatNumber(totalBonus)}%</span>
            </div>
        </div>
    `;
}

function atualizarPontos() {
    document.getElementById("points").innerText = `Kanye Points: ${formatNumber(gameState.points)}`;
    atualizarBarraXp();
    atualizarRebirthUI();
    atualizarBuffsHUD();
}

function atualizarBarraXp() {
    const levelEl = document.getElementById("xp-level");
    const progressEl = document.getElementById("xp-progress-text");
    const fillEl = document.getElementById("xp-fill");

    if (!levelEl || !progressEl || !fillEl) {
        return;
    }

    const xpLevel = Math.max(1, Math.floor(safeNumber(gameState.xpLevel, 1)));
    const xpRequired = getXpRequiredForLevel(xpLevel);
    const xpCurrent = Math.max(0, Math.min(xpRequired - 1, Math.floor(safeNumber(gameState.xpCurrent, 0))));
    const progressPercent = Math.min(100, Math.max(0, (xpCurrent / xpRequired) * 100));

    levelEl.textContent = `Nivel ${formatNumber(xpLevel)}`;
    progressEl.textContent = `${formatNumber(xpCurrent)} / ${formatNumber(xpRequired)} XP`;
    fillEl.style.width = `${progressPercent.toFixed(2)}%`;
}

function atualizarItens() {
    const itemsContainer = document.getElementById("items");
    if (!itemsContainer) {
        return;
    }

    const nickname = getLeaderboardNickname();
    const sideTitle = document.querySelector(".side-title");
    const sideSubtitle = document.querySelector(".side-subtitle");
    if (sideTitle) {
        sideTitle.textContent = `Imperio de ${nickname}`;
    }
    if (sideSubtitle) {
        sideSubtitle.textContent = `Resumo da carreira de ${nickname}`;
    }

    const itensComprados = [];
    SHOP_ITEMS.forEach((item) => {
        const quantidade = gameState.shop[item.id].quantidade;
        if (quantidade > 0) {
            itensComprados.push({
                nome: item.nome,
                quantidade
            });
        }
    });

    const skinAtual = getCurrentSkin();
    const musicaAtual = getCurrentMusic();
    const totalUpgrades = getTotalOwnedItems();
    const totalSkins = sumOwnedSkins();
    const totalMusicas = sumOwnedMusics();
    const rebirths = gameState.rebirthCount;
    const colecaoTotal = SKINS.length + MUSIC_TRACKS.length;
    const colecaoAtual = totalSkins + totalMusicas;
    const colecaoPercentual = Math.floor((colecaoAtual / Math.max(1, colecaoTotal)) * 100);
    const tiposDeItens = itensComprados.length;
    const chipsVisiveis = itensComprados
        .slice()
        .sort((a, b) => b.quantidade - a.quantidade)
        .slice(0, 4)
        .map((item) => `<span class="item-chip">${item.nome} x${formatNumber(item.quantidade)}</span>`);
    const itensRestantes = Math.max(0, itensComprados.length - chipsVisiveis.length);
    const listaChips = itensComprados.length > 0
        ? `${chipsVisiveis.join("")}${itensRestantes > 0 ? `<span class="items-empty">+${formatNumber(itensRestantes)} itens</span>` : ""}`
        : "<span class='items-empty'>Nenhum item comprado ainda</span>";

    itemsContainer.innerHTML = `
        <div class="items-title">Resumo rapido</div>
        <div class="items-stats-grid">
            <div class="items-stat-card">
                <span class="items-stat-label">Poder</span>
                <span class="items-stat-value">+${formatNumber(getTotalBonusPercent())}%</span>
            </div>
            <div class="items-stat-card">
                <span class="items-stat-label">Rebirths</span>
                <span class="items-stat-value">${formatNumber(rebirths)}</span>
            </div>
            <div class="items-stat-card">
                <span class="items-stat-label">Colecao</span>
                <span class="items-stat-value">${formatNumber(colecaoPercentual)}%</span>
            </div>
            <div class="items-stat-card">
                <span class="items-stat-label">Itens</span>
                <span class="items-stat-value">${formatNumber(totalUpgrades)} (${formatNumber(tiposDeItens)} tipos)</span>
            </div>
        </div>
        <p class="items-meta">Ativos: <strong>${skinAtual.nome}</strong> e <strong>${musicaAtual.nome}</strong></p>
        <p class="items-meta">Colecao desbloqueada: ${formatNumber(colecaoAtual)} / ${formatNumber(colecaoTotal)}</p>
        <div class="items-chips">
            ${listaChips}
        </div>
    `;

    atualizarBuffsHUD();
}

function checkTarget() {
    // Alerta de 67 pontos removido por instabilidade.
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
                <button class="shop-btn" onclick="comprarItem('${item.id}', this)">Comprar</button>
            </div>
        `;
    }).join("");
}

function comprarItem(itemId, buttonEl = null) {
    const item = SHOP_ITEMS.find((entry) => entry.id === itemId);
    if (!item) {
        return;
    }

    const itemState = gameState.shop[item.id];
    if (gameState.points < itemState.preco) {
        tratarCompraInvalida(buttonEl);
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

    tocarSomCompraCash();
    mostrarAnimacaoCompra(`${item.nome} comprado!`);
}

function abrirLoja() {
    renderShop();
    document.getElementById("shop").style.display = "flex";
}

function fecharLoja() {
    document.getElementById("shop").style.display = "none";
}

function renderizarUpgrades() {
    const container = document.getElementById("upgrades-list");
    if (!container) {
        return;
    }

    container.innerHTML = SPECIAL_UPGRADES.map((upgrade) => {
        const state = gameState.upgrades[upgrade.id];
        const maximo = state.nivel >= upgrade.maxNivel;
        const textoPreco = maximo ? "Maximo atingido" : `${formatNumber(state.preco)} pontos`;
        const botaoLabel = maximo ? "Max" : "Melhorar";
        const descricaoBonus = getDescricaoBonusUpgrade(upgrade, state.nivel);

        return `
            <div class="shop-item">
                <div class="item-info">
                    <h3>${upgrade.nome}</h3>
                    <p>${upgrade.descricao}</p>
                    <p class="item-level">Nivel: ${formatNumber(state.nivel)} / ${formatNumber(upgrade.maxNivel)}</p>
                    <p class="item-level">${descricaoBonus}</p>
                    <span class="item-price">${textoPreco}</span>
                </div>
                <button class="shop-btn" onclick="comprarUpgrade('${upgrade.id}', this)" ${maximo ? "disabled" : ""}>${botaoLabel}</button>
            </div>
        `;
    }).join("");
}

function comprarUpgrade(upgradeId, buttonEl = null) {
    const upgrade = SPECIAL_UPGRADES.find((entry) => entry.id === upgradeId);
    if (!upgrade) {
        return;
    }

    const state = gameState.upgrades[upgrade.id];
    if (!state) {
        return;
    }

    if (state.nivel >= upgrade.maxNivel) {
        mostrarAnimacaoCompra(`${upgrade.nome} ja esta no nivel maximo.`);
        return;
    }

    if (gameState.points < state.preco) {
        tratarCompraInvalida(buttonEl);
        return;
    }

    gameState.points -= state.preco;
    state.nivel += 1;
    state.preco = Math.floor(state.preco * UPGRADE_PRICE_MULTIPLIER);

    renderizarUpgrades();
    iniciarAutoClick();
    atualizarPontos();
    atualizarItens();
    verificarConquistas();
    saveGameState();

    tocarSomCompraCash();
    mostrarAnimacaoCompra(`Upgrade ${upgrade.nome} nivel ${state.nivel}!`);
}

function abrirUpgrades() {
    renderizarUpgrades();
    document.getElementById("upgrades").style.display = "flex";
}

function fecharUpgrades() {
    document.getElementById("upgrades").style.display = "none";
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

    if (achievement.tipo === "musics_owned") {
        return sumOwnedMusics();
    }

    if (achievement.tipo === "rebirths") {
        return gameState.rebirthCount;
    }

    if (achievement.tipo === "golden_clicks") {
        return collectedGoldenClicks;
    }

    if (achievement.tipo === "special_upgrades") {
        return SPECIAL_UPGRADES.reduce((acc, upgrade) => acc + getUpgradeLevel(upgrade.id), 0);
    }

    return 0;
}

function isAchievementUnlocked(id) {
    return gameState.unlockedAchievements.includes(id);
}

function isAchievementRewardClaimed(id) {
    return Array.isArray(gameState.claimedAchievementRewards) && gameState.claimedAchievementRewards.includes(id);
}

function getAchievementRewardLabel(achievement) {
    if (!achievement.recompensa || !achievement.recompensa.pontos) {
        return "";
    }
    return `Recompensa: ${formatNumber(achievement.recompensa.pontos)} pontos`;
}

function resgatarRecompensaConquista(achievementId) {
    const achievement = ACHIEVEMENTS.find((entry) => entry.id === achievementId);
    if (!achievement || !achievement.recompensa || !achievement.recompensa.pontos) {
        return;
    }

    if (!isAchievementUnlocked(achievement.id) || isAchievementRewardClaimed(achievement.id)) {
        return;
    }

    gameState.points += achievement.recompensa.pontos;
    gameState.claimedAchievementRewards.push(achievement.id);
    atualizarPontos();
    atualizarItens();
    saveGameState();
    renderizarConquistas();
    tocarSomCompraCash();
    mostrarAnimacaoCompra(`Recompensa de ${achievement.nome} resgatada!`);
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
        atualizarPontos();
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
        const rewardLabel = getAchievementRewardLabel(achievement);
        const rewardClaimed = isAchievementRewardClaimed(achievement.id);
        const canClaimReward = unlocked && achievement.recompensa && !rewardClaimed;

        return `
            <div class="shop-item ${unlocked ? "desbloqueado" : ""}">
                <div class="item-info">
                    <h3>${unlocked ? "â­" : "ðŸ”’"} ${achievement.nome}</h3>
                    <p>${achievement.descricao}</p>
                    <p>${formatNumber(progress)} / ${formatNumber(achievement.meta)}</p>
                    ${rewardLabel ? `<p class="achievement-reward">${rewardLabel}</p>` : ""}
                </div>
                ${canClaimReward
                    ? `<button class="shop-btn" onclick="resgatarRecompensaConquista(${achievement.id})">Resgatar</button>`
                    : (rewardLabel && rewardClaimed ? "<button class='shop-btn' disabled>Resgatado</button>" : "")}
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
                    : `<button class='shop-btn' onclick='comprarSkin(${skin.id}, this)'>Comprar</button>`
                }
            </div>
        `;
    }).join("");
}

function comprarSkin(id, buttonEl = null) {
    const skin = SKINS.find((entry) => entry.id === id);
    if (!skin) {
        return;
    }

    if (gameState.skins[skin.id]) {
        usarSkin(skin.id);
        return;
    }

    if (gameState.points < skin.preco) {
        tratarCompraInvalida(buttonEl);
        return;
    }

    gameState.points -= skin.preco;
    gameState.skins[skin.id] = true;

    atualizarPontos();
    atualizarItens();
    renderizarSkins();
    verificarConquistas();
    saveGameState();

    tocarSomCompraCash();
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

function renderizarMusicas() {
    const container = document.getElementById("lista-musicas");
    if (!container) {
        return;
    }

    container.innerHTML = MUSIC_TRACKS.map((music) => {
        const comprado = Boolean(gameState.musics[music.id]);
        const usando = gameState.currentMusicId === music.id;

        return `
            <div class="shop-item ${comprado ? "comprado" : ""}">
                <div class="item-info">
                    <h3>${usando ? "*" : ""} ${music.nome}</h3>
                    <p>${music.descricao}</p>
                    <p>${music.preco === 0 ? "Gratis" : `${formatNumber(music.preco)} pontos`}</p>
                    <p>Bonus: +${music.bonus}%</p>
                </div>
                ${comprado
                    ? (usando
                        ? "<button class='shop-btn' disabled>Tocando</button>"
                        : `<button class='shop-btn' onclick='usarMusica(${music.id})'>Usar</button>`)
                    : `<button class='shop-btn' onclick='comprarMusica(${music.id}, this)'>Comprar</button>`
                }
            </div>
        `;
    }).join("");
}

function comprarMusica(id, buttonEl = null) {
    const music = MUSIC_TRACKS.find((entry) => entry.id === id);
    if (!music) {
        return;
    }

    if (gameState.musics[music.id]) {
        usarMusica(music.id);
        return;
    }

    if (gameState.points < music.preco) {
        tratarCompraInvalida(buttonEl);
        return;
    }

    gameState.points -= music.preco;
    gameState.musics[music.id] = true;
    gameState.currentMusicId = music.id;
    sincronizarMusicaAtiva(true);

    atualizarPontos();
    atualizarItens();
    renderizarMusicas();
    verificarConquistas();
    saveGameState();

    tocarSomCompraCash();
    mostrarAnimacaoCompra(`Musica liberada: ${music.nome} tocando agora!`);
}

function usarMusica(id) {
    if (!gameState.musics[id]) {
        return;
    }

    gameState.currentMusicId = id;
    sincronizarMusicaAtiva(true);
    atualizarPontos();
    atualizarItens();
    renderizarMusicas();
    verificarConquistas();
    saveGameState();

    const music = getCurrentMusic();
    mostrarAnimacaoCompra(`Tocando: ${music.nome} (+${music.bonus}%)`);
}

function abrirLojaMusicas() {
    renderizarMusicas();
    document.getElementById("music-shop").style.display = "flex";
}

function fecharLojaMusicas() {
    document.getElementById("music-shop").style.display = "none";
}

function atualizarInputsConfig() {
    const nickname = getLeaderboardNickname();
    const volumePercent = Math.round(clampVolumePercent(gameState.musicVolume) * 100);

    const leaderboardNickname = document.getElementById("leaderboard-current-nickname");
    if (leaderboardNickname) {
        leaderboardNickname.textContent = `Nickname: ${nickname}`;
    }

    const settingsNick = document.getElementById("settings-nickname");
    if (settingsNick) {
        settingsNick.value = nickname;
    }

    const settingsVolume = document.getElementById("settings-volume");
    if (settingsVolume) {
        settingsVolume.value = String(volumePercent);
    }

    const settingsVolumeValue = document.getElementById("settings-volume-value");
    if (settingsVolumeValue) {
        settingsVolumeValue.textContent = `${volumePercent}%`;
    }

    const settingsClickSfx = document.getElementById("settings-click-sfx-enabled");
    if (settingsClickSfx) {
        // Checkbox representa "desativar": checked => som desligado.
        settingsClickSfx.checked = !Boolean(gameState.clickSfxEnabled);
    }

}

function atualizarPreviewVolumeConfiguracoes(value) {
    const volumePercent = Math.min(100, Math.max(0, Math.floor(safeNumber(value, 45))));
    const settingsVolumeValue = document.getElementById("settings-volume-value");
    if (settingsVolumeValue) {
        settingsVolumeValue.textContent = `${volumePercent}%`;
    }

    if (musicPlayer) {
        musicPlayer.volume = volumePercent / 100;
    }
}

function abrirConfiguracoes() {
    atualizarInputsConfig();
    document.getElementById("settings").style.display = "flex";
}

function fecharConfiguracoes() {
    document.getElementById("settings").style.display = "none";
    aplicarVolumeMusica(gameState.musicVolume);
    atualizarInputsConfig();
}

async function salvarConfiguracoes() {
    const nicknameInput = document.getElementById("settings-nickname");
    const volumeInput = document.getElementById("settings-volume");
    const clickSfxInput = document.getElementById("settings-click-sfx-enabled");

    const novoNickname = normalizarNome(nicknameInput ? nicknameInput.value : "");
    if (!novoNickname) {
        alert("Digite um nickname valido.");
        return;
    }

    const volumePercent = Math.min(100, Math.max(0, Math.floor(safeNumber(volumeInput ? volumeInput.value : 45, 45))));
    const volume = volumePercent / 100;

    const nicknameAnterior = getLeaderboardNickname();
    const mudouNickname = nicknameAnterior.toLowerCase() !== novoNickname.toLowerCase();

    gameState.nickname = novoNickname;
    aplicarVolumeMusica(volume);
    // Checkbox representa "desativar": checked => som desligado.
    const desativarSomClique = clickSfxInput ? Boolean(clickSfxInput.checked) : false;
    gameState.clickSfxEnabled = !desativarSomClique;

    if (mudouNickname) {
        gameState.leaderboardRegistered = false;
        gameState.leaderboardBestScore = 0;
    }

    saveGameState();
    atualizarInputsConfig();
    atualizarItens();
    fecharConfiguracoes();

    mostrarAnimacaoCompra("Configuracoes salvas!");

    if (mudouNickname) {
        await sincronizarLeaderboardAutomaticamente(true);
    }
}

function normalizarNome(nome) {
    return String(nome || "").trim().slice(0, 20);
}

function atualizarRegistroLeaderboard(nome, score, rebirths = 0) {
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
            rebirths: Math.max(entry.rebirths || 0, rebirths),
            criadoEm: nowIso
        };
    });

    if (!found) {
        updated.push({
            nome,
            score,
            rebirths,
            criadoEm: nowIso
        });
    }

    leaderboardData.scores = sanitizeLeaderboardEntries(updated);
    saveLeaderboardCache();
}

async function enviarScoreLeaderboard(nome, score, rebirths) {
    try {
        const response = await fetch(LEADERBOARD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                score,
                rebirths
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
        atualizarRegistroLeaderboard(nome, score, rebirths);
    }
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
                <p>${new Date(entry.criadoEm).toLocaleString("pt-BR")} | Rebirths: ${formatNumber(entry.rebirths || 0)}</p>
            </div>
            <span class="leaderboard-score">${formatNumber(entry.score)} pts</span>
        </div>
    `).join("");
}

async function abrirLeaderboard() {
    atualizarInputsConfig();
    document.getElementById("leaderboard").style.display = "flex";
    await carregarLeaderboard(true);
}

function fecharLeaderboard() {
    document.getElementById("leaderboard").style.display = "none";
}

async function salvarScoreLeaderboard() {
    const nome = getLeaderboardNickname();

    if (!nome) {
        alert("Digite um nickname valido para salvar no ranking.");
        return;
    }

    const scoreAtual = Math.floor(gameState.points);
    const rebirthsAtuais = Math.floor(gameState.rebirthCount);

    await enviarScoreLeaderboard(nome, scoreAtual, rebirthsAtuais);
    gameState.leaderboardRegistered = true;
    gameState.leaderboardBestScore = Math.max(gameState.leaderboardBestScore, scoreAtual);
    saveGameState();
    atualizarInputsConfig();

    renderizarLeaderboard(leaderboardData.scores);
    verificarConquistas();

    mostrarAnimacaoCompra(`Score salvo para ${nome}!`);
}

async function sincronizarLeaderboardAutomaticamente(forceSubmit = false) {
    if (leaderboardSyncInProgress) {
        return;
    }

    leaderboardSyncInProgress = true;

    try {
        const nome = getLeaderboardNickname();
        const scoreAtual = Math.floor(gameState.points);
        const rebirthsAtuais = Math.floor(gameState.rebirthCount);

        const precisaRegistrar = !gameState.leaderboardRegistered;
        const bateuNovoRecorde = scoreAtual > gameState.leaderboardBestScore;
        const deveEnviar = forceSubmit || precisaRegistrar || bateuNovoRecorde;

        if (deveEnviar) {
            await enviarScoreLeaderboard(nome, scoreAtual, rebirthsAtuais);
            gameState.leaderboardRegistered = true;
            gameState.leaderboardBestScore = Math.max(gameState.leaderboardBestScore, scoreAtual);
            saveGameState();
            atualizarInputsConfig();
        } else {
            await carregarLeaderboard(false);
        }

        renderizarLeaderboard(leaderboardData.scores);
        verificarConquistas();
    } finally {
        leaderboardSyncInProgress = false;
    }
}

function iniciarAutoSyncLeaderboard() {
    if (leaderboardAutoSyncInterval) {
        clearInterval(leaderboardAutoSyncInterval);
    }

    leaderboardAutoSyncInterval = setInterval(() => {
        sincronizarLeaderboardAutomaticamente(false);
    }, LEADERBOARD_AUTO_SYNC_MS);
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

        const ganho = adicionarPontos(passive);
        mostrarFeedbackPontos(ganho, "auto");
        atualizarPontos();
        checkTarget();
        verificarConquistas();
        saveGameState();
    }, getAutoClickIntervalMs());
}

function animarCliquePrincipal() {
    const botao = document.getElementById("kanye");
    if (!botao) {
        return;
    }

    botao.classList.remove("is-click-animating");
    // Reinicia a animacao para cada clique sem deslocar o botao.
    void botao.offsetWidth;
    botao.classList.add("is-click-animating");
}

function registrarCliquePrincipal() {
    animarCliquePrincipal();
    tocarSomCliquePop();
    const ganho = adicionarPontos(getClickPower());
    adicionarXpPorClique(1 + getXpGainPerClickUpgradeValue());
    mostrarFeedbackPontos(ganho, "manual");
    gameState.totalClicks += 1;

    atualizarPontos();
    checkTarget();
    verificarConquistas();
    saveGameState();
}

async function initGame() {
    loadGameState();
    await carregarLeaderboard();

    aplicarVolumeMusica(gameState.musicVolume);
    applyCurrentSkinVisual();
    renderShop();
    renderizarSkins();
    renderizarMusicas();
    renderizarConquistas();
    renderPointers();
    atualizarInputsConfig();
    atualizarPontos();
    atualizarItens();

    await sincronizarLeaderboardAutomaticamente(true);
    iniciarAutoSyncLeaderboard();
    verificarConquistas();
    iniciarAutoClick();
    iniciarEventosAleatorios();
    sincronizarMusicaAtiva(false);

    document.addEventListener("pointerdown", () => {
        sincronizarMusicaAtiva(false);
    }, { once: true });

    document.getElementById("kanye").addEventListener("click", registrarCliquePrincipal);
    window.addEventListener("resize", atualizarCentroPonteiros);
    window.addEventListener("scroll", atualizarCentroPonteiros, { passive: true });
    setTimeout(atualizarCentroPonteiros, 0);
}

initGame();



