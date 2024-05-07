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
    song.play();
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


var emptyArray = [];

function randomArray(dirSongs) {
    for (let i = 0; i < dirSongs.length; i++) {
        emptyArray.push(i);
    }
}



function arrayRandom() {
    for (let i = 0; i < emptyArray.length; i++) {
        let k = Math.floor(Math.random() * emptyArray.length);
        return [emptyArray[k], k];
    }
}


let functionCalled = false;

let prevSong = [5];

let prevFunc = false;

let indexK = 2;

function mytimetoshine() {
    prevFunc = false;
    main();
}

function prevSongTime() {
    if (indexK <= prevSong.length) {
        prevFunc = true;
        main();
    }
    if(indexK > prevSong.length || prevSong.length==0){
        song.play();
        song.currentTime = 0;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }

}




async function main() {
    var dirSongs = await getSongs();
    song.pause();
    song.currentTime = 0;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    
    if (!functionCalled) {
        randomArray(dirSongs);
        functionCalled = true;
    }
    if (prevFunc == false) {
        let j = arrayRandom();
        let i = j[0];
        let k = j[1];
        prevSong.push(i);

        song = new Audio(dirSongs[i]);
        let modifiedURL = dirSongs[i].replace("http://127.0.0.1:5500", "");
        let decodedPath = decodeURIComponent(modifiedURL).replace(/%20/g, ' ');
        nextSong(decodedPath);
        changeName(decodedPath);
        changeSongName(decodedPath);
        emptyArray.splice(k, 1);
        
        if (emptyArray.length == 0) {
            functionCalled = false;
        }
    }
    else {

        let i = prevSong.length - indexK;

        if (i >= 0) {
            indexK++;

            song = new Audio(dirSongs[prevSong[i]]);
            let modifiedURL = dirSongs[prevSong[i]].replace("http://127.0.0.1:5500", "");
            let decodedPath = decodeURIComponent(modifiedURL).replace(/%20/g, ' ');
            nextSong(decodedPath);
            changeName(decodedPath);
            changeSongName(decodedPath);
            if (emptyArray.length == 0) {
                functionCalled = false;
            }

        }


    }

}


