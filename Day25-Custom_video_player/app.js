const player = document.querySelector('.player')
const video = player.querySelector('.player_video')
const toggle = player.querySelector('.toggle')
const time = player.querySelector('.player_time')
const progress = player.querySelector('.player_progress')
const progressBar = player.querySelector('.player_progress_filled')
const skipBtns = player.querySelectorAll('[data-skip]')
const volume = player.querySelector('.player_volume input')

function togglePlay(){
    if (video.paused){
        video.play()
        toggle.innerHTML = "<i class='bx bx-pause' ></i>"
    } else {
        video.pause()
        toggle.innerHTML = "<i class='bx bx-play'></i>"
    }
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) *100
    progressBar.style.width = `${percent}%`

    time.innerHTML = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

video.addEventListener('timeupdate', handleProgress)

skipBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        video.currentTime += +this.dataset.skip
    })
})

progress.addEventListener('click', scrub)

volume.addEventListener('change', function(){
    video.volume = this.value
})

function formatTime(time){
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)
    let minuteValue, secondValue

    minuteValue = minutes < 10 ? '0' + minutes : minutes
    secondValue = seconds < 10 ? '0' + seconds : seconds

    mediaTime = minuteValue + ':' + secondValue

    return mediaTime
}

    