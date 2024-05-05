let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let sourceBtn = document.getElementById("source");
let nextBtn = document.getElementById("nextBtn");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function nextSong(audioMain, audio){
    sourceBtn.src = audioMain;
    song.currentTime = 0;
    song.pause();
   audio.play();
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
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/MusicPlayer/media/Music/");
    let respone =  await a.text();
    let div = document.createElement("div");
    div.innerHTML = respone;
    let mySongs = [];
    let as = div.getElementsByTagName("a");
    for(let index=0; index <as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            mySongs.push(element.href);
        }
    }
    return mySongs;
    
}

 async function main() {
    let dirSongs = await getSongs();
    console.log(dirSongs[0]);

    let audio = new Audio(dirSongs[0]);
    let modifiedURL = dirSongs[0].replace("http://127.0.0.1:5500", "");
    let decodedPath = decodeURIComponent(modifiedURL).replace(/%20/g, ' ');
    nextSong(decodedPath, audio);
    // audio.play();
}


