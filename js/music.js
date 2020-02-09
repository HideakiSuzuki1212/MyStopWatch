let fileList = [
  { name : '正解！', url : 'music/correct1.mp3'},
  { name : '残念…', url : 'music/incorrect1.mp3'},
  { name : '旅立ちの日に', url : 'music/tabidachi.mp3'},
];
let playMusic = new Audio();
let playFlag = false;
let playList = '<ul>';
for(let i=0; i < fileList.length; i++){
    playList +='<li onclick = PlayMusic("'+fileList[i].url+'")>'; //なんとなく分かるが言語化できない。
    playList += fileList[i].name +'</li>';//ここも。
}
playList +='</ul>';
document.getElementById("playListArea").innerHTML = playList;//IdがplayListAreaのところに変数のplayListを入れる。

let pbtn = document.getElementById('playbtn');

function PlayMusic(url){
  playMusic.pause();
  playMusic = new Audio(url);
  playMusic.play();
  playFlag = true;
  pbtn.innerHTML = "<p>Ⅱ ストップ</p>";
}

pbtn.addEventListener('click', () => {
    if (playFlag == false){
        playFlag = true;
        playMusic.play();
        pbtn.innerHTML = "<p>Ⅱ ストップ</p>";
    } else {
        playFlag = false;
        playMusic.pause();
        pbtn.innerHTML = "<p>▶ 音楽再生♪</p>";
    }
},true);
