let playMusic;
let fileList = [
  {},
  {},
  {},
  {},
  {},
];
let playList = '<ul>';
for(let i=0; i < fileList.length; i++){
    playList +='<li onclick = start_music("'+fileList[i].url+'")>'; //ここの意味がわからん
    playList += fileList[i].name +'</li>';//ここもよくわからん。
}
playList +='</ul>';
document.getElementById("playListArea").innerHTML = playList;//ここは分かりそう。

function PlayMusic(){
  playMusic = new Audio();
  playMusic.src = "music/tabidachi.mp3";
  playMusic.play();
}

function StopMusic(){
  playMusic.pause();
}
