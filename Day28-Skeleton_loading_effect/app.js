const cardImg = document.querySelector('.card_img')
const cardHeading = document.querySelector('.card_info h2')
const cardContent = document.querySelector('.card_info p')
const cardBtn = document.querySelector('.card_info button')

setTimeout(() => {
    
    cardImg.innerHTML='<img src="BK05.jpg" alt="">'

    cardHeading.innerHTML = 'Hello'
    cardContent.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis'

    cardBtn.innerHTML = 'Read more'

    document.querySelectorAll('.loading').forEach((item) => {
        item.classList.remove('loading')
    })
}, 2000)