let header = document.getElementById('header')

let initialPosition = window.pageYOffset

window.onscroll = () => {
    let currentPosition = window.pageYOffset

    currentPosition > 80 ? header.style.backdropFilter = 'blur(5px)' : header.style.backdropFilter = 'blur(0px)'

    initialPosition >= currentPosition ? header.style.top = '0' : header.style.top = '-80px'

    initialPosition = currentPosition
}