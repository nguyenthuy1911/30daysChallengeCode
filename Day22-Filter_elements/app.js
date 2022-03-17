const btns = document.querySelectorAll('.food_menu button')
const foodList = document.querySelectorAll('.food_item')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const type = e.target.getAttribute('type')

        document.querySelector('button.active').classList.remove('active')
        e.target.classList.add('active')

        foodList.forEach((food) => {
            if ((food.getAttribute('type') == type) || (type=='all')){
                food.classList.remove('hide')
            }else food.classList.add('hide')
        })
    })
})