const body = document.querySelector('body')
const range = document.querySelector('.range_bar')
const rangeBar = document.querySelector('.range_bar span')

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`
    rangeBar.innerText = `${percent}%`
    body.style.backgroundColor = `rgba(0,0,0, ${percent / 100})`
}

setRangeBar(40)

range.addEventListener('mousemove', function(e){
    const process = e.pageX - this.offsetLeft
    let percent = Math.round((process / this.offsetWidth) *100)
    setRangeBar(percent)
})