const canvas = document.querySelector('#canvas')
const colorEl = document.querySelector('#color')
const eraser = document.querySelector('#eraser')
const decrease = document.querySelector('#decrease')
const increase = document.querySelector('#increase')
const sizeEl = document.querySelector('#size')
const save = document.querySelector('#save')
const clear = document.querySelector('#clear')

const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x, y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI *2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSize(){
    sizeEl.innerText = size
}

increase.addEventListener('click', () => {
    size > 45 ? 50: (size += 5)
    updateSize()
})

decrease.addEventListener('click', () => {
    size < 10 ? 5: (size -= 5)
    updateSize()
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

eraser.addEventListener('click', () => {
    color = '#fff'
})

save.addEventListener('click', (e) => {
    const imageURL = canvas.toDataURL('image/png')
    e.currentTarget.href = imageURL
})