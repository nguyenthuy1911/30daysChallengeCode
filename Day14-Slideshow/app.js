const listImg = document.querySelectorAll('.img_list div')
const imgWrap = document.querySelector('.main img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentIndex = 0;

function setCurrent(index){
    currentIndex = index
    imgWrap.src = listImg[currentIndex].querySelector('img').src

    listImg.forEach((item) => {
        item.classList.remove('active')
    })

    listImg[currentIndex].classList.add('active')
}

listImg.forEach((img, index) => {
    img.addEventListener('click', (e) =>{
        imgWrap.style.opacity = '0'
        setTimeout(() => {
            setCurrent(index)
            imgWrap.style.opacity = '1'
        },400)
        
    })   
})

next.addEventListener('click', () => {
    if (currentIndex == listImg.length -1){
        currentIndex = 0
    } else currentIndex++

    imgWrap.style.animation = ''
    setTimeout(() => {
        setCurrent(currentIndex)
        imgWrap.style.animation = 'leftToRight 1s ease-in-out forwards'
    },400)
})

prev.addEventListener('click', () => {
    if (currentIndex == 0){
        currentIndex = listImg.length -1
    } else currentIndex --

    imgWrap.style.animation = ''
    setTimeout(() => {
        setCurrent(currentIndex)
        imgWrap.style.animation = 'rightToLeft 1s ease-in-out forwards'
    },200)
})