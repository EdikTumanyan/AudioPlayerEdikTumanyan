const handle = document.querySelector('.handle')
const fill = document.querySelector('.fill');
const main = document.getElementById('main')
let data = {
    title: [
        "C418 - Aria Math",
        "Coolio - Gangsta's Paradise",
        "Elton John - I'm Still Standing",
        "Imagine Dragons - Believer",
        "MGMT - Little Dark Age",
        "Michael Jackson - Billie Jean",
        "Pharrell Williams - Happy",
        "Queen - Bohemian Rhapsody",
        "The Weeknd - Blinding Lights",
    ],

    song: [
        "music/2-13. Aria Math.mp3",
        "music/Coolio - Gangsta's Paradise.mp3",
        "music/Elton John – I'm Still Standing.mp3",
        "music/Imagine Dragons - Believer.mp3",
        "music/MGMT - Little Dark Age.mp3",
        "music/Michael Jackson - Billie Jean.mp3",
        "music/Pharrell Williams - Happy.mp3",
        "music/Queen - Bohemian Rhapsody.mp3",
        "music/The Weeknd - Blinding Lights.mp3"
    ],

    poster: [
        "https://images.genius.com/a2a267834abe5f3bb4c2bb58b320fa81.1000x1000x1.jpg",
        "https://upload.wikimedia.org/wikipedia/en/e/e9/Coolio_-_Gangsta%27s_Paradise.jpg",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "https://media3.giphy.com/media/Wxc9iA6vBWMP9jbMjn/200w.gif?cid=6c09b952zt09oew5svjy3nehwfag00tnh6p6nw18n5acsbjb&ep=v1_gifs_search&rid=200w.gif&ct=g",

    ]
}


let song = new Audio()
window.onload = function () {
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

function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")


    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 99 + "%"
    convertTime(song.currentTime)

    if (song.ended) {
        next()
    }
})





function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec


    currentTime[0].textContent = min + ":" + sec

    totalTime(Math.round(song.duration))

}

function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent += " / " + min + ":" + sec
}

function prev() {
    currentSong--

    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }

    playSong()
    play.src = "images/pause.png"
}

function next() {
    currentSong++;

    if (currentSong >= data.song.length) {
        currentSong = 0
    }

    playSong();
    play.src = "images/pause.png"
}

function mute() {
    let mute = document.getElementById("mute")

    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    } else {
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}

function decrease(){
    let mute = document.getElementById("mute")

    song.volume -= 0.2

    if(song.volume <= 0.1){
        mute.src = "images/volume-mute.png"
    }
}

function increase(){
    song.volume += 0.2
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = song.duration;

    song.currentTime = (clickX / width) * duration;
}

handle.addEventListener('click',setProgress)