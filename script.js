/* const url = document.URL */
const url = 'https://www.youtube.com/watch?v=3B_qXITddHU&list=PLzgiudKkoJnl9URMe27pokxsiWVvUa3lF'
// const lists;

function captureLinks(){
    let urlClear = url.replace(/.+watch\?v=/, '')
    const links = {
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
    return 'nova lista'
}
function saveCards (newCard){
    const cards = loadCards() || []
    cards.push(newCard)
    localStorage.setItem('saveCards', JSON.stringify(cards))
}
function loadCards (){
    const cards = JSON.parse(localStorage.getItem('saveCards'))
    return cards
}
function captureImage() {
    /* retorna link da thumnail */
}
function createNewCard(){
    const card = {}
    card.links = captureLinks()
    card.title = captureTitle()
    card.imgSrc = captureImage()
    saveCards(card)
}
function verifyList() {
    const cards = loadCards()
    for (let index = 0; index < cards.length; index += 1){
        if (cards[index].links.url === url){
            return index
        }
    }
}

function main() {
    if (!url.includes('watch')){
        const body = document.querySelector('body')
        body.appendChild(initCarousel())
        return 'init youtube lists'
    }
    if (url.includes('list=')){
        const cardIndex = verifyList()
        if (!Number.isInteger(cardIndex)) {
            createNewCard()
        }
    }
}
function waitLoadYT() {
    if (document.readyState === 'complete') {
        main()        
    } else {
        window.requestAnimationFrame(waitLoadYT)
    }
}
