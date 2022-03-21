const wrapper = document.querySelector('.wrapper')

let isMousedown = false
let startX, scrollLeft 

wrapper.addEventListener('mousedown', (e) => {
    isMousedown = true
    startX = e.pageX - wrapper.offsetLeft
    scrollLeft = wrapper.scrollLeft
})

wrapper.addEventListener('mouseleave', (e) => {
    isMousedown = false
})

wrapper.addEventListener('mouseup', () => {
    isMousedown = false
})

wrapper.addEventListener('mousemove', (e) => {
    if (!isMousedown) return

    const x = e.pageX - wrapper.offsetLeft

    const walk = (x - startX) * 3
    wrapper.scrollLeft = scrollLeft - walk
})