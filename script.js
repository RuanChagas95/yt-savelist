// const url = document.URL
const url = 'https://www.youtube.com/watch?v=3B_qXITddHU&list=PLzgiudKkoJnl9URMe27pokxsiWVvUa3lF'
// const lists;
window.onload = () => {
    if (url.includes('list=')){
        //nada
    }
}
function captureLinks(){
    let urlClear = url.replace(/.+watch\?v=/, '')
    const links = {
        list: urlClear.replace(/.+list=/, ''),
        video: urlClear.replace(/list=.+/, '')
    }
    return links
}

function captureTitle(){
    const title = document.querySelector('h3 yt-formatted-string[title] a').innerText
    if (title){
        return title
    }
    return 'Título não encontrado'
}

