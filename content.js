
function next() {
    document.getElementById('next-activity-link').click()
}

function setupAutoplay() {
    const video = document.querySelector('video')
    if (video == null) { return }

    video.currentTime = 0

    setTimeout(() => {
        // some weird bug, so calling this twice
        video.currentTime = 0
        video.play()

        video.addEventListener('ended', next)
    }, 1000)
}

setTimeout(setupAutoplay, 1000) // wait for page to load
