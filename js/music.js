let playMusic;

function PlayMusic(){
  playMusic = new Audio();
  playMusic.src = "music/tabidachi.mp3";
  playMusic.play();
}

function StopMusic(){
  playMusic.pause();
}
