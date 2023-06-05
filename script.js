// const url = document.URL
const url = 'https://www.youtube.com/watch?v=3B_qXITddHU&list=PLzgiudKkoJnl9URMe27pokxsiWVvUa3lF'
// const lists;
window.onload = () => {
    if (url.includes('list=')){
        return createNewCard()
    }
    if (url.includes('watch')){
        return true
    }
    /* exibir listas */
    
}
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
    /* retorna objeto com informação dos cards */
    return false
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

