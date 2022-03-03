const alert = document.querySelector('.alert')
const box = document.querySelector('.box')
const result = document.querySelector('.result')
const ekey = document.querySelector('.card.key p:last-child')
const elocation = document.querySelector('.card.location p:last-child')
const ewhich = document.querySelector('.card.which p:last-child')
const ecode = document.querySelector('.card.code p:last-child')

document.addEventListener('keydown', (e) =>{

    result.innerText = e.which
    if(e.which == 32){
        ekey.innerText = 'Space'
    } else   ekey.innerText = e.key

    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code

    alert.classList.add('hide')
    box.classList.remove('hide')

})

//problem: after pressing tab key