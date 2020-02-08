let fileList = [
  { name : '正解！', url : 'music/correct1.mp3'},
  { name : '残念…', url : 'music/incorrect1.mp3'},
  { name : '旅立ちの日に', url : 'music/tabidachi.mp3'},
];

let playMusic = new Audio();
let playList = '<ul>';
for(let i=0; i < fileList.length; i++){
    playList +='<li onclick = PlayMusic("'+fileList[i].url+'")>'; //ここの意味がわからん
    playList += fileList[i].name +'</li>';//ここもよくわからん。
}
playList +='</ul>';
document.getElementById("playListArea").innerHTML = playList;//ここは分かりそう。

function PlayMusic(url){
  playMusic.pause();
  playMusic = new Audio(url);
  playMusic.play();
}

function StopMusic(){
  playMusic.pause();
}
