const btns = document.querySelectorAll('button')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const audio = e.target.querySelector('audio')
        playSound(audio)
    })
})

const playSound = (audio) => {
    const clone = audio.cloneNode()
    clone.play()
    
}

document.addEventListener('keydown', (e) => {
    const btn = document.querySelector(`.key_${e.key}`)
    btn && btn.click()
})