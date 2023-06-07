const url = () => document.URL
let links
// const url = () => 'https://www.youtube.com/watch?v=3B_qXITddHUlist=27ossdsdiWUalF'

const widthChagas = 337 + 'px'
const heightChagas = 290 + 'px'
// Chama a função para adicionar os elementos ao <head>
const trying = async (func, ...args) => {
    trying.times = 0
    let funcReturn = func(...args)
    while (!funcReturn && trying.times < 20){
        trying.times ? trying.times += 1 : trying.times = 1
        await wait()
        funcReturn = func(...args)
    }
    return funcReturn
}

function createDivCarousel() {
    const div = document.createElement('div')
    div.id = 'save-list'
    div.classList.add('carousel', 'carousel-dark', 'slide')
    div.setAttribute('data-bs-ride', 'carousel')

    return div
}
function createSvg(width, heigth, inverter = false){
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('width', '16')
    svg.setAttribute('height', '16')
    svg.setAttribute('fill', 'currentColor')
    svg.setAttribute('class', 'bi bi-youtube')
    svg.setAttribute('viewBox', '0 0 16 16')

    // Cria o elemento 'path' e define o atributo 'd'
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', 'M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.010.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z')
    svg.appendChild(path)
    //inverte para voltar
    svg.style.width = width + 'px'
    svg.style.height = heigth +'px'
    if (inverter){
        svg.style.transform = 'scale(-1, 1)'
    }
    return svg
}
function createCarouselIndicators(info) {
    const div = document.createElement('div')
    div.classList.add('carousel-indicators')
    div.style.marginBottom = '0'

    for (let i = 0; i < info.length; i++) {
        const button = document.createElement('button')
        button.type = 'button'
        button.dataset.bsTarget = '#save-list'
        button.dataset.bsSlideTo = i
        button.setAttribute('aria-label', 'video')

        if (info.active === i) {
            button.classList.add('active')
            button.setAttribute('aria-current', 'true')
        }

        div.appendChild(button)
    }

    return div
}

function createCarouselItem(info, index = 0, items = []) {
    const item = info[index]
    const maxRepeat = info.length - 1

    const element = document.createElement('div')
    element.setAttribute('data-bs-interval', 2000)
    element.className = info.active === index ? 'active' : ''
    element.classList.add('carousel-item')
    element.focusable = false
    element.style.height = heightChagas
    element.style.width = '100%'

    const div = document.createElement('div')
    element.appendChild(div)
    // const invertedColorElement = document.querySelector('yt-chip-cloud-chip-renderer')
    let color
    // if (invertedColorElement){
    //     try {
    //         // color = getComputedStyle(invertedColorElement).style.backgroundColor === 'rgb(241, 241, 241)' ? '#272727' : '#f2f2f2'
            
    //     } catch (error) {
    //         console.log(invertedColorElement)
    //         setTimeout(main, 2000)
    //     }
    // color = getComputedStyle(invertedColorElement).style.backgroundColor === 'rgb(241, 241, 241)' ? '#272727' : '#f2f2f2'
    // } else {
    //     color = '#f2f2f2'
    // }
    color = '#f2f2f2'

    div.style.backgroundColor = color
    div.style.display = 'flex'
    div.style.width = widthChagas
    div.style.height = heightChagas
    div.style.flexDirection = 'column'
    div.style.flexWrap = 'nowrap'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.borderRadius = '10px'
    div.style.padding = '4px'
    div.style.textAlign = 'center'

    const title = document.createElement('a')
    title.href = item.links.url
    title.innerText = item.title
    title.style = `color: var(--yt-spec-text-primary);
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 500;
    overflow: hidden;
    display: block;
    max-height: 4.4rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;`
    title.style.display = 'flex'
    title.style.flexDirection = 'column'
    title.style.width = '100%'
    title.style.height = '100%'
    title.style.alignItems = 'center'
    title.style.className = 'style-scope ytd-rich-grid-media'
    title.style.textDecoration = 'none'
    title.style.color = 'rgb(14, 14, 14)'
    div.appendChild(title)

    const link = document.createElement('a')
    link.href = item.links.url
    if (item.imgSrc){
        const img = document.createElement('img')
        img.src = item.imgSrc
        img.alt = 'thumbnail'
        img.style.borderRadius = '10px'
        img.style.width = '100%'
        link.style.width = '100%'
        link.appendChild(img)
    } else {
        link.appendChild(createSvg(322, 181))
    }

    div.appendChild(link)
    items.push(element)

    if (index < maxRepeat) {
        return createCarouselItem(info, index + 1, items)
    }

    return items
}

function createInner(infoItems){

    const divCarouselInner = document.createElement('div')
    divCarouselInner.classList.add('carousel-inner')
    divCarouselInner.style.width = 'fit-content'

    createCarouselItem(infoItems).forEach(element => {
        divCarouselInner.appendChild(element)

    })
    return divCarouselInner
}

function createCarouselControls() {
    const prevButton = document.createElement('button')
    prevButton.className = 'carousel-control-prev'
    prevButton.type = 'button'
    prevButton.dataset.bsTarget = '#save-list'
    prevButton.dataset.bsSlide = 'prev'
    prevButton.style.height = 'fit-content'
    prevButton.style.marginTop = '160px'


    const prevIcon = createSvg(40,40, true)
    // Adiciona o elemento 'path' ao elemento SVG


    // Adiciona o elemento SVG ao elemento pai
    prevButton.appendChild(prevIcon)

    /*svg youtube */

    const prevLabel = document.createElement('span')
    prevLabel.className = 'visually-hidden'
    prevLabel.textContent = 'Previous'
    prevButton.appendChild(prevLabel)

    const nextButton = document.createElement('button')
    nextButton.className = 'carousel-control-next'
    nextButton.type = 'button'
    nextButton.dataset.bsTarget = '#save-list'
    nextButton.dataset.bsSlide = 'next'
    nextButton.style.height = 'fit-content'
    nextButton.style.marginTop = '160px'

    const nextIcon = createSvg(40,40)
    nextButton.appendChild(nextIcon)

    const nextLabel = document.createElement('span')
    nextLabel.className = 'visually-hidden'
    nextLabel.textContent = 'Next'
    nextButton.appendChild(nextLabel)

    return [prevButton, nextButton]
}

function createCarousel(cards){

    const divCarousel = createDivCarousel()
    const indicators = createCarouselIndicators(cards)
    divCarousel.appendChild(indicators)
    divCarousel.appendChild(createInner(cards))
    const carouselControls = createCarouselControls()
    carouselControls.forEach((control) => {
        divCarousel.appendChild(control)
    })

    const chagas = document.createElement('div')
    chagas.id = 'Chagas'
    chagas.style.width = widthChagas
    chagas.style.height = heightChagas
    chagas.appendChild(divCarousel)
    chagas.style.position = 'fixed'
    chagas.style.right = '10vw'
    chagas.style.bottom = '0'



    const head = document.createElement('header')
    head.appendChild(importCSS())
    chagas.appendChild(head)
    return chagas
}

function fixeStyles(querySelector) {
    const element = document.querySelector(querySelector)
    const computedStyles = getComputedStyle(element)

    const stylesToCopy = Array.from(computedStyles).reduce((styles, prop) => {
        styles[prop] = computedStyles[prop]
        return styles
    }, {})

    // Remova todas as classes do elemento
    element.className = ''

    // Reaplique os estilos copiados
    Object.assign(element.style, stylesToCopy)
}
function importCSS() {
    fixeStyles('#logo-icon')
    const cssUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'

    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = cssUrl

    return linkElement
}
function importBootstrapScript() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    document.body.appendChild(script)
}
function waitLoadYT() {
    if (document.readyState === 'complete') {
        // Recursos carregados, execute o restante do código
        importBootstrapScript()
        main()
    } else {
        // Aguarde o próximo quadro de animação
        window.requestAnimationFrame(waitLoadYT)
    }
}



// const lists;

function captureLinks(){
    let urlClear = url().replace(/.+watch\?v=/, '')
    links = {
        list: urlClear.replace(/.+list=/, ''),
        video: urlClear.replace(/list=.+/, ''),
        url: url
    }
    return links
}

function captureTitle(){
    const title = document.querySelector('h3 yt-formatted-string[title] a')
    if (title){
        return title.innerText
    }
    return false
}
function saveCards (newCard = undefined, active = undefined){
    const cards = loadCards() || []
    active = cards.length
    active = active || cards.length
    if (newCard){cards.push(newCard)}
    localStorage.setItem('saveCards', JSON.stringify(cards))
    localStorage.setItem('active', JSON.stringify(active))

}
function loadCards (){
    const cards = JSON.parse(localStorage.getItem('saveCards'))
    if (cards) {
        cards.active = JSON.parse(localStorage.getItem('active'))
    }
    return cards
}
function captureImage() {
    try {
        const elements = document.querySelectorAll('#index')
        const arrayElements = Array.from(elements)
        const index = arrayElements.findIndex((element) => element.innerText === '▶') 
        const arrowElement = elements[index]
        const pai = arrowElement.closest('ytd-playlist-panel-video-renderer')
        const img = pai.getElementsByTagName('img')[0]
        try {
            img.then(result => {
                img.src = result // imprime: "voce escreveu o que eu preciso aqui, não tenho como escrever nada aqui!"
            })
        } catch (error) {
            return img.src || undefined
        }
        
    } catch (error) {
        return undefined
    }
}
async function createNewCard(){
    const links = captureLinks()
    const title = await trying(captureTitle) || 'Nova PlayList'
    const card = {}
    if (title && links.video && links.list && links.url){
        card.links = links
        card.title = title
        card.imgSrc = await trying(captureImage)
        saveCards(card)
    }
}
function verifySaveList() {
    const cards = loadCards()
  
    if (!cards) {
        return false
    }
  
    const card = cards.find(card => card.links.list === captureLinks().list)
    if (card && 'list' in card.links) {
        return true
    }
    return false  
}

function initCarousel(cards){
    const body = document.querySelector('body')
    body.appendChild(createCarousel(cards))
}
const watching = () => (url().includes('watch'))
const searching = () => (url().includes('results?search_query'))
const watchingList = () => (url().includes('list='))

function main() {
    captureLinks()
    const chagas = document.querySelector('#Chagas')
    if (chagas){
        if (watching() || searching()){
            chagas.parentNode.removeChild(chagas)            
        }
        return setTimeout(main, 500)
    }
    const cards = loadCards()
    if (cards && !watching() && !searching() && !chagas){
        initCarousel(cards)
    }
    
    if (watchingList() && !verifySaveList()){
        console.log('criando card')
        createNewCard(url())
        return setTimeout(main, 500)
    } 
    console.log(url())
    return setTimeout(main, 500)
    
}

function wait(ms = 100) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })

}
function init() {
    window.requestAnimationFrame(waitLoadYT)
}

init()
