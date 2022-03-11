const numbers = document.querySelectorAll('.number')

function count(el) {
    let to = parseInt(el.innerText)
    let speed = 250
    let step = to / speed
    let from = 0
    const counter = setInterval(function(){
        from += step
        if (from > to){
            el.innerText = to
            clearInterval(counter)
        } else{
            el.innerText = Math.round(from)
        }
    },1)
}

numbers.forEach((number) => {
    count(number)
})