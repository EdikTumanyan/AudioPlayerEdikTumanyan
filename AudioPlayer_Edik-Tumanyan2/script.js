let data = {
    title : [
        "Aria Math",
        ""
    ],

    song : [
        "music/2-13. Aria Math.mp3",
        "",
    ],

    poster : [
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        ""
    ]
}


let song = new Audio()
window.onload = function(){
    playSong()
}

let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}

function playOrPauseSong(){
    let play = document.getElementById("play")

    if(song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/pay-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate" , function(){
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration

    fill[0].style.marginleft = position * 99 + "%"
} )