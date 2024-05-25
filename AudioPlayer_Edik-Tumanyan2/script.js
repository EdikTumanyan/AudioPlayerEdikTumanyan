const handle = document.querySelector('.handle')
const fill = document.querySelector('.fill');
const main = document.getElementById('main')
let previousDuration = 0
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
        "https://upload.wikimedia.org/wikipedia/en/6/69/Elton_John_StillStanding.jpg",
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Imagine-Dragons-Believer-art.jpg/220px-Imagine-Dragons-Believer-art.jpg",
        "https://i1.wp.com/cornellsun.com/wp-content/uploads/2018/02/V-CA-_npJZ0bktrbw-U6aS8J1EafqdG2mn03CTHjwk1B_xPOKh6y_sePG8uj8icyzZkBfQOyflS6gOZIH2pdPvRorSVEGnwqLNc_IMimjm9TRvti4025BSP0M0v0z-wZWH86IIKM.jpeg?fit=628%2C629&ssl=1",
        "https://i.scdn.co/image/ab67616d0000b2739eb690cb054df293fe7711b8",
        "https://m.media-amazon.com/images/M/MV5BODIyNDY0NTQ5Nl5BMl5BanBnXkFtZTgwMzk4NjY5NTE@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg",
        "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",

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
    if (!isNaN(song.duration)) {
        previousDuration = song.duration

        let min = Math.floor(seconds / 60)
        let sec = Math.floor(seconds % 60)


        min = (min < 10) ? "0" + min : min
        sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent += " / " + min + ":" + sec
    }


   


    if (isNaN(song.duration)) {
        let min = Math.floor(previousDuration / 60)
        let sec = Math.floor(previousDuration % 60)

        min = (min < 10) ? "0" + min : min
        sec = (sec < 10) ? "0" + sec : sec

        currentTime[0].textContent += " / " + min + ":" + sec
    }

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

function decrease() {
    let mute = document.getElementById("mute")

    song.volume -= 0.2

    if (song.volume <= 0.1) {
        mute.src = "images/volume-mute.png"
    }
}

function increase() {
    song.volume += 0.2
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = song.duration;

    song.currentTime = (clickX / width) * duration;
}

handle.addEventListener('click', setProgress)