const container = document.querySelector('.container')
const SQUARES = 220

for (let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(e){
    const color = randomColor()
    e.style.background = color
    e.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`
}

function removeColor(e){
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}

function randomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i=0; i<6; i++){
        color += letters[Math.round(Math.random() * 16)]
    }
    return color
}