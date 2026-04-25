let KanyePoints = 0
let clickPower = 1
const TARGET_POINTS = 67
let autoClickInterval = null

// Contadores de itens comprados
let autoClickersComprados = 0
let upgradesClickComprados = 0

// Preços base
let precoAutoClick = 10
let precoUpgradeClick = 20


function abrirLoja() {
    document.getElementById("shop").style.display = "flex"
    atualizarPrecosLoja()
}

function fecharLoja() {
    document.getElementById("shop").style.display = "none"
}

function atualizarPrecosLoja() {
    document.getElementById("preco-auto").textContent = precoAutoClick
    document.getElementById("preco-upgrade").textContent = precoUpgradeClick
}

// Atualizar lista de itens comprados
function atualizarItens() {
    let itens = []
    if (autoClickersComprados > 0) {
        itens.push(`Auto Clicker x${autoClickersComprados}`)
    }
    if (upgradesClickComprados > 0) {
        itens.push(`Click +5 x${upgradesClickComprados}`)
    }
    
    const textoItens = itens.length > 0 ? itens.join(", ") : "Nenhum"
    document.getElementById("items").textContent = "Itens: " + textoItens
}


document.getElementById("kanye").addEventListener("click", function() {
    KanyePoints += clickPower
    totalCliques++
    atualizarPontos()
    checkTarget()
    verificarConquistas()
})


function atualizarPontos() {
    document.getElementById("points").innerText = "Kanye Points: " + KanyePoints
}

function comprarAutoClick() {
    if (KanyePoints >= precoAutoClick) {
        KanyePoints -= precoAutoClick
        autoClickersComprados++
        
        // Escalar preço (aumenta 50% a cada compra)
        precoAutoClick = Math.floor(precoAutoClick * 1.5)
        
        if (!autoClickInterval) {
            autoClickInterval = setInterval(() => {
                KanyePoints += autoClickersComprados
                atualizarPontos()
            }, 1000)
        }
        
        atualizarPontos()
        atualizarPrecosLoja()
        atualizarItens()
        mostrarAnimacaoCompra(`Auto Clicker x${autoClickersComprados} purchased!`)
        criarPointer(autoClickersComprados)
    } else {
        alert("Pontos insuficientes!")
    }
}


function comprarUpgradeClick() {
    if (KanyePoints >= precoUpgradeClick) {
        KanyePoints -= precoUpgradeClick
        upgradesClickComprados++
        clickPower += 5
        
        // Escalar preço (aumenta 50% a cada compra)
        precoUpgradeClick = Math.floor(precoUpgradeClick * 1.5)
        
        atualizarPontos()
        atualizarPrecosLoja()
        atualizarItens()
        mostrarAnimacaoCompra(`Click +5 (Level ${upgradesClickComprados}) purchased!`)
    } else {
        alert("Pontos insuficientes!")
    }
}

// Criar pointer com posição única
function criarPointer(indice) {
    const pointer = document.createElement("img")
    pointer.src = "pointer.svg"
    pointer.className = "pointer-orbit"
    
    // Posição única baseada no índice
    const radius = 100 + (indice * 30)
    const duration = 2 + (indice * 0.3)
    const delay = indice * 0.2
    
    pointer.style.setProperty("--radius", radius + "px")
    pointer.style.animationDuration = duration + "s"
    pointer.style.animationDelay = delay + "s"
    
    document.body.appendChild(pointer)
}

function mostrarAnimacaoCompra(mensagem) {
    const anim = document.createElement("div")
    anim.className = "compra-animacao"
    anim.innerHTML = `<span>✨ ${mensagem} ✨</span>`
    document.body.appendChild(anim)
    
    setTimeout(() => anim.remove(), 1500)
}

function checkTarget() {
    if (KanyePoints === TARGET_POINTS) {
        showAlert()
    }
}

function showAlert() {
    document.getElementById("alertPoints").textContent = KanyePoints
    document.getElementById("customAlert").style.display = "flex"
}

function fecharAlert() {
    document.getElementById("customAlert").style.display = "none"
}

// ========== CONQUISTAS ==========
const conquistas = [
    { id: 1, nome: "Eu sou Deus", descricao: "Chegue a 67 pontos", meta: 67, desbloqueado: false },
    { id: 2, nome: "College Dropout", descricao: "Chegue a 100 pontos", meta: 100, desbloqueado: false },
    { id: 3, nome: "Late Registration", descricao: "Chegue a 500 pontos", meta: 500, desbloqueado: false },
    { id: 4, nome: "Graduation", descricao: "Chegue a 1000 pontos", meta: 1000, desbloqueado: false },
    { id: 5, nome: "808s & Heartbreak", descricao: "Clique 500 vezes", meta: 500, tipo: "cliques", desbloqueado: false },
    { id: 6, nome: "MBDTF", descricao: "Tenha 5 Auto Clickers", meta: 5, tipo: "autoClickers", desbloqueado: false },
    { id: 7, nome: "Yeezus", descricao: "Tenha 10 upgrades de clique", meta: 10, tipo: "upgrades", desbloqueado: false },
    { id: 8, nome: "The Life of Pablo", descricao: "Tenha 10 ponteiros", meta: 10, tipo: "ponteiros", desbloqueado: false },
    { id: 9, nome: "Ye", descricao: "Chegue a 5000 pontos", meta: 5000, desbloqueado: false },
    { id: 10, nome: "Donda", descricao: "Chegue a 10000 pontos", meta: 10000, desbloqueado: false }
]

let totalCliques = 0

function verificarConquistas() {
    let atualizou = false
    conquistas.forEach(c => {
        if (!c.desbloqueado) {
            let completo = false
            if (c.tipo === "cliques") {
                completo = totalCliques >= c.meta
            } else if (c.tipo === "autoClickers") {
                completo = autoClickersComprados >= c.meta
            } else if (c.tipo === "upgrades") {
                completo = upgradesClickComprados >= c.meta
            } else if (c.tipo === "ponteiros") {
                completo = autoClickersComprados >= c.meta
            } else {
                completo = KanyePoints >= c.meta
            }
            if (completo) {
                c.desbloqueado = true
                atualizou = true
                mostrarAnimacaoCompra(`🏆 Conquista: ${c.nome}!`)
            }
        }
    })
    if (atualizou) renderizarConquistas()
}

function renderizarConquistas() {
    const container = document.getElementById("lista-conquistas")
    container.style.display = "grid"
    container.style.gridTemplateColumns = "repeat(2, 1fr)"
    container.style.gap = "15px"
    container.innerHTML = conquistas.map(c => `
        <div class="shop-item ${c.desbloqueado ? 'desbloqueado' : ''}">
            <div class="item-info">
                <h3>${c.desbloqueado ? '✅' : '🔒'} ${c.nome}</h3>
                <p>${c.descricao}</p>
            </div>
        </div>
    `).join("")
}

function abrirConquistas() {
    renderizarConquistas()
    document.getElementById("achievements").style.display = "flex"
}

function fecharConquistas() {
    document.getElementById("achievements").style.display = "none"
}

// ========== PERSONALIZAÇÃO ==========
const skins = [
    { id: 1, nome: "Kanye Clássico", preco: 0, imagem: "41-414314_transparent-kanye-head-png-kanye-west-head-png.png", comprado: true },
    { id: 2, nome: "Pablo", preco: 100, imagem: "Kanye-West-Yeezy-Season-3-tlop-msg-2016-billboard-650.webp", comprado: false },
    { id: 3, nome: "Yeezy", preco: 250, imagem: "https___hypebeast.com_image_2017_09_kanye-west-debuts-new-adidas-yeezy-boost-700-wave-runners-0001.avif", comprado: false },
    { id: 4, nome: "Jesus Is King", preco: 500, imagem: "maxresdefault.jpg", comprado: false },
    { id: 5, nome: "Donda", preco: 1000, imagem: "images (1).jpg", comprado: false }
]

let skinAtual = 1

function renderizarSkins() {
    const container = document.getElementById("lista-skins")
    container.innerHTML = skins.map(s => `
        <div class="shop-item ${s.comprado ? 'comprado' : ''}">
            <div class="item-info">
                <h3>${s.id === skinAtual ? '⭐' : ''} ${s.nome}</h3>
                <p>${s.preco === 0 ? 'Grátis' : s.preco + ' pontos'}</p>
            </div>
            ${s.comprado ? 
                (s.id === skinAtual ? 
                    '<button class="shop-btn" disabled>Usando</button>' : 
                    '<button class="shop-btn" onclick="usarSkin(' + s.id + ')">Usar</button>') :
                '<button class="shop-btn" onclick="comprarSkin(' + s.id + ')">Comprar</button>'}
        </div>
    `).join("")
}

function comprarSkin(id) {
    const skin = skins.find(s => s.id === id)
    if (KanyePoints >= skin.preco) {
        KanyePoints -= skin.preco
        skin.comprado = true
        atualizarPontos()
        atualizarItens()
        mostrarAnimacaoCompra(`🎨 Skin: ${skin.nome}!`)
        renderizarSkins()
    } else {
        alert("Pontos insuficientes!")
    }
}

function usarSkin(id) {
    skinAtual = id
    const skin = skins.find(s => s.id === id)
    document.getElementById("kanye").querySelector("img").src = skin.imagem
    renderizarSkins()
}

function abrirPersonalizacao() {
    renderizarSkins()
    document.getElementById("customization").style.display = "flex"
}

function fecharPersonalizacao() {
    document.getElementById("customization").style.display = "none"
}