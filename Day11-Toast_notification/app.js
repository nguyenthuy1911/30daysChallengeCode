const btnShows = document.querySelectorAll('.control button')
btnShows.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        creatToast(e.target.getAttribute('class'), 2000)
    })
})

const toasts = {
    success: {
        icon: '<i class="fas fa-check-circle"></i>',
        msg: 'This is a success message!',
    },
    warning: {
        icon: '<i class="fas fa-exclamation-circle"></i>',
        msg: 'This is a warning message!',
    },
    error: {
        icon: '<i class="fas fa-exclamation-triangle"></i>',
        msg: 'This is a error message!',
    },
}

function creatToast(status, time){
    let toast = document.createElement('div')
    toast.className = `toast ${status}`

    toast.innerHTML =` ${toasts[status].icon}
                    <span>${toasts[status].msg}</span>
                    <span class="countdown"></span>`

    document.querySelector('.toasts').appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'hide 1s ease forwards'
    },time)
    setTimeout(() => {
        toast.remove()
    }, time + 2000)
}