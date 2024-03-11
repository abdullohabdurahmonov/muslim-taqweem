date.innerHTML = `${today}-${months[month]}.${year}`
date2.innerHTML = `${today}-${months[month]}.${year}`

document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});