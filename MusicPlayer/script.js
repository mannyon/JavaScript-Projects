let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let sourceBtn = document.getElementById("source");
let nextBtn = document.getElementById("nextBtn");
let artist = document.getElementById("artist");
let songName = document.getElementById("songName");
let thumbnail = document.getElementById("thumbnail");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function nextSong(audioMain) {
    sourceBtn.src = audioMain;
    song.play();

    song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }


}

function playPause() {

    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/MusicPlayer/media/Music/");
    let respone = await a.text();
    let div = document.createElement("div");
    div.innerHTML = respone;
    let mySongs = [];
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            mySongs.push(element.href);
        }
    }
    return mySongs;

}

function changeName(filePath) {
    const startIndex = filePath.indexOf("Music/") + "Music/".length;
    const endIndex = filePath.indexOf(" -");
    const artistName = filePath.substring(startIndex, endIndex);
    artist.innerHTML = artistName;
}

function thumbnailMaker(nameOfSong) {
    thumbnail.src = "Media/Artist/" + nameOfSong + ".jpeg";
}

function changeSongName(filePath) {
    const startIndex = filePath.indexOf(" - ") + " - ".length;
    const endIndex = filePath.indexOf(".mp3");
    const nameOfSong = filePath.substring(startIndex, endIndex);
    songName.innerHTML = nameOfSong;

    thumbnailMaker(nameOfSong);
}

var previousNumber = null;


async function main() {
    var dirSongs = await getSongs();
    song.pause();
    song.currentTime = 0;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    // let randomNumber = Math.random();
    // let i = Math.floor(randomNumber * 7);
    let i = generateRandomNumber();
    
        song = new Audio(dirSongs[i]);
        let modifiedURL = dirSongs[i].replace("http://127.0.0.1:5500", "");
        let decodedPath = decodeURIComponent(modifiedURL).replace(/%20/g, ' ');
        nextSong(decodedPath);
        changeName(decodedPath);
        changeSongName(decodedPath);
}


// Initialize previousNumber variable to keep track of the previously generated number

function generateRandomNumber() {
    var randomNumber;

    // Generate a random number between 0 and 6, excluding the previous number
    do {
        randomNumber = Math.floor(Math.random() * 7); // Generate a random number between 0 (inclusive) and 7 (exclusive)
    } while (randomNumber === previousNumber); // Repeat the process if the generated number is the same as the previous one

    previousNumber = randomNumber; // Update the previousNumber variable with the newly generated number
    return randomNumber; // Return the generated random number
}
