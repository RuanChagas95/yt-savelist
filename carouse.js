function createDivCarousel(id) {
    const div = document.createElement('div')
    div.id = id
    div.classList.add('carousel', 'carousel-dark', 'slide')
    
    return div
}

const carouselIndicators = {
    target: '#carouselExampleDark',
    slideTo: [0, 1, 2],
    activeSlide: 1,
    ariaLabels: ['Slide 1', 'Slide 2', 'Slide 3'],
    ariaCurrent: true
}

function createHTMLCarouselIndicators(obj) {
    const div = document.createElement('div')
    div.classList.add('carousel-indicators')
  
    for (let i = 0; i < obj.slideTo.length; i++) {
        const button = document.createElement('button')
        button.type = 'button'
        button.dataset.bsTarget = obj.target
        button.dataset.bsSlideTo = obj.slideTo[i]
        button.setAttribute('aria-label', obj.ariaLabels[i])
  
        if (i === obj.activeSlide) {
            button.classList.add('active')
            button.setAttribute('aria-current', 'true')
        }
  
        div.appendChild(button)
    }
  
    return div
}
const carouselItems = [
    {
        interval: 10000,
        ariaLabel: 'Placeholder: First slide',
        fill: '#f5f5f5',
        inlineFill: '#1f2020',
        textFill: '#aaa',
        rectFill: '#1f2020',
        textStyle: '#afaca7',
        class: 'carousel-item',
        caption: {
            label: 'First slide label',
            content: 'Some representative placeholder content for the first slide.'
        }
    },
    {
        interval: 2000,
        ariaLabel: 'Placeholder: Second slide',
        fill: '#eee',
        inlineFill: '#dcdad8',
        textFill: '#bbb',
        rectFill: '#bbb',
        textStyle: '#dcdad8',
        class: 'carousel-item active',
        caption: {
            label: 'Second slide label',
            content: 'Some representative placeholder content for the second slide.'
        }
    }
]
  
function createCarouselItem(repeat = 0, items = []) {
    const item = carouselItems[repeat]
    const maxRepeat = carouselItems.length - 1
    const divCarouselItem = document.createElement('div')
    divCarouselItem.className = item.class
    divCarouselItem.dataset.bsInterval = item.interval
      
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.classList.add('bd-placeholder-img', 'bd-placeholder-img-lg', 'd-block', 'w-100')
    svg.setAttribute('width', '800')
    svg.setAttribute('height', '400')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('role', 'img')
    svg.setAttribute('aria-label', item.ariaLabel)
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice')
    svg.setAttribute('focusable', 'false')
      
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title')
    title.textContent = 'Placeholder'
    svg.appendChild(title)
      
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('width', '100%')
    rect.setAttribute('height', '100%')
    rect.setAttribute('fill', item.fill)
    rect.style.setProperty('--darkreader-inline-fill', item.rectFill)
    rect.setAttribute('data-darkreader-inline-fill', '')
    svg.appendChild(rect)
      
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttribute('x', '50%')
    text.setAttribute('y', '50%')
    text.setAttribute('fill', item.textFill)
    text.setAttribute('dy', '.3em')
    text.setAttribute('data-darkreader-inline-fill', '')
    text.style.setProperty('--darkreader-inline-fill', item.textStyle)
    text.textContent = item.caption.label
    svg.appendChild(text)
      
    const divCaption = document.createElement('div')
    divCaption.classList.add('carousel-caption', 'd-none', 'd-md-block')
      
    const h5 = document.createElement('h5')
    h5.textContent = item.caption.label
    divCaption.appendChild(h5)
      
    const p = document.createElement('p')
    p.textContent = item.caption.content
    divCaption.appendChild(p)
      
    divCarouselItem.appendChild(svg)
    divCarouselItem.appendChild(divCaption)
    items.push(divCarouselItem)
      
    if (repeat < maxRepeat) {
        return createCarouselItem(repeat + 1, items)
    }
      
    return items
}
      

      
function createInner(obj){
    const carouselItems = obj
    const divCarouselInner = document.createElement('div')
    divCarouselInner.classList.add('carousel-inner')

    createCarouselItem().forEach(element => {
        divCarouselInner.appendChild(element)
        
    })
    return divCarouselInner
}
function createCarouselControls() {
    const prevButton = document.createElement('button')
    prevButton.className = 'carousel-control-prev'
    prevButton.type = 'button'
    prevButton.dataset.bsTarget = '#carouselExampleDark'
    prevButton.dataset.bsSlide = 'prev'
  
    const prevIcon = document.createElement('span')
    prevIcon.className = 'carousel-control-prev-icon'
    prevIcon.setAttribute('aria-hidden', 'true')
    prevButton.appendChild(prevIcon)
  
    const prevLabel = document.createElement('span')
    prevLabel.className = 'visually-hidden'
    prevLabel.textContent = 'Previous'
    prevButton.appendChild(prevLabel)
  
    const nextButton = document.createElement('button')
    nextButton.className = 'carousel-control-next'
    nextButton.type = 'button'
    nextButton.dataset.bsTarget = '#carouselExampleDark'
    nextButton.dataset.bsSlide = 'next'
  
    const nextIcon = document.createElement('span')
    nextIcon.className = 'carousel-control-next-icon'
    nextIcon.setAttribute('aria-hidden', 'true')
    nextButton.appendChild(nextIcon)
  
    const nextLabel = document.createElement('span')
    nextLabel.className = 'visually-hidden'
    nextLabel.textContent = 'Next'
    nextButton.appendChild(nextLabel)
  
    return [prevButton, nextButton]
}
const divCarousel = createDivCarousel('carouselExampleDark')
const indicators = createHTMLCarouselIndicators(carouselIndicators)
divCarousel.appendChild(indicators)
divCarousel.appendChild(createInner(carouselItems))
const carouselControls = createCarouselControls()
carouselControls.forEach((control) => {
    divCarousel.appendChild(control)
})
console.log(divCarousel.outerHTML)


//test