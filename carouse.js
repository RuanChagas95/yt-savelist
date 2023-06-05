
const widthChagas = 337 + 'px'
const heightChagas = 290 + 'px' 
// Chama a função para adicionar os elementos ao <head>

// Chame a função para importar e aplicar o CSS para #Chagas
function createDivCarousel() {
    const div = document.createElement('div')
    div.id = 'save-list'
    div.classList.add('carousel', 'carousel-dark', 'slide')
    // div.setAttribute('data-bs-ride', 'carousel')
    
    return div
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
  
        if (info[i].class === 'active') {
            button.classList.add('active')
            button.setAttribute('aria-current', 'true')
        }
  
        div.appendChild(button)
    }
  
    return div
}
const infoItems = [
    {
        title: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio',
        class: '',
        v: 'KnlRCAaUEig',
        imgSrc: 'https://i.ytimg.com/vi/tnlEJRFCFEs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBN6kyXj0PbUaSLaLHWBZiY3DnREg'
    },
    {
        title: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in',
        class: 'active',
        v: 'KnlRCAaUEig',
        imgSrc: 'https://cdn.cloudflare.steamstatic.com/steam/apps/108600/ss_d4a0f78dc94273c7f0eedc186569efc091387066.116x65.jpg?t=1679306018'
    }
]

function createCarouselItem(info, repeat = 0, items = []) {
    const item = info[repeat]
    const maxRepeat = info.length - 1
    
    const element = document.createElement('div')
    element.setAttribute('data-bs-interval', item.interval)
    element.className = item.class
    element.classList.add('carousel-item')
    element.focusable = false
    element.style.height = heightChagas //test
    element.style.width = '100%'

    const div = document.createElement('div')
    element.appendChild(div)
    div.style.display = 'flex'
    div.style.backgroundColor = '#e9e3e3'
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
    title.innerText = info[repeat].title
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
    div.appendChild(title)

    const img = document.createElement('img')
    img.src = info[repeat].imgSrc
    img.alt = 'thumbnail'
    img.style.width = '100%'
    img.style.bottom = '0'
    img.style.border = 'solid'
    img.style.borderRadius = '10px'
    div.appendChild(img)

    items.push(element)
  
    if (repeat < maxRepeat) {
        return createCarouselItem(info, repeat + 1, items)
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
  
    const prevIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    prevIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    prevIcon.setAttribute('width', '16')
    prevIcon.setAttribute('height', '16')
    prevIcon.setAttribute('fill', 'currentColor')
    prevIcon.setAttribute('class', 'bi bi-youtube')
    prevIcon.setAttribute('viewBox', '0 0 16 16')

    // Cria o elemento 'path' e define o atributo 'd'
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', 'M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.010.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z')

    // Adiciona o elemento 'path' ao elemento SVG
    prevIcon.appendChild(path)
    //inverte para voltar
    prevIcon.style.width = '40px'
    prevIcon.style.height = '40px'
    const nextIcon = prevIcon.cloneNode(true)
   
    prevIcon.style.transform = 'scale(-1, 1)'

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
    
    nextButton.appendChild(nextIcon)
  
    const nextLabel = document.createElement('span')
    nextLabel.className = 'visually-hidden'
    nextLabel.textContent = 'Next'
    nextButton.appendChild(nextLabel)
  
    return [prevButton, nextButton]
}
function initCarousel(){

    const divCarousel = createDivCarousel()
    const indicators = createCarouselIndicators(infoItems)
    divCarousel.appendChild(indicators)
    divCarousel.appendChild(createInner(infoItems))
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

function checkResources() {
    if (document.readyState === 'complete') {
        // Recursos carregados, execute o restante do código
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
        document.body.appendChild(script)

        const body = document.querySelector('body')
        body.appendChild(initCarousel())
    } else {
        // Aguarde o próximo quadro de animação
        window.requestAnimationFrame(checkResources)
    }
}
function  init() {
    window.requestAnimationFrame(checkResources)
}
init()

