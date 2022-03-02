const images = document.querySelectorAll('.wrapper .image img')
const gallery = document.querySelector('.gallery')
const imgGallery = document.querySelector('.gallery_inner img')
const close = document.querySelector('.gallery .close')
const btnPrev = document.querySelector('.control.prev')
const btnNext = document.querySelector('.control.next')

let indexImg = 0

images.forEach((img, index) => {
    img.addEventListener('click', ()=>{
        indexImg = index
        galleryShow()
    })
})

function galleryShow(){
    gallery.classList.add('gallery_show')
    imgGallery.src = images[indexImg].src

    if(indexImg == images.length -1){
        btnNext.classList.add('hide')
    } else{
        btnNext.classList.remove('hide')
    }

    if(indexImg == 0){
        btnPrev.classList.add('hide')
    } else{
        btnPrev.classList.remove('hide')
    }
}

 close.addEventListener('click', () => {
     gallery.classList.remove('gallery_show')
 })

 btnNext.addEventListener('click', () => {
     indexImg ++
     galleryShow()
 })

 btnPrev.addEventListener('click', () => {
    indexImg --
    galleryShow()
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) gallery.classList.remove('gallery_show')
})