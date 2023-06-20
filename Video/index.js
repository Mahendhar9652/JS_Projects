var playButton =document.getElementById('play');
var pauseButton =document.getElementById('pause');
var video = document.getElementById('myVideo');


playButton.addEventListener('click',()=>{
    video.play()
})

pauseButton.addEventListener('click',()=>{
    video.pause()
})