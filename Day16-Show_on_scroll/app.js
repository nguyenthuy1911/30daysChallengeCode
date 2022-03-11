const elToShow = document.querySelectorAll('.show-on-scroll')

function isElInViewPort(el){
    let rect = el.getBoundingClientRect()
    let heightScreen = window.innerHeight

    if (!(rect.bottom <0 || rect.top > heightScreen)){
        el.classList.add('start')
    } else{
        el.classList.remove('start')
    }
}

function animation(){
    elToShow.forEach((el) => {
        isElInViewPort(el)
    })
}

window.onscroll = animation