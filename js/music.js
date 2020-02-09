let fileList = [
  { name : 'BGM1', url : 'music/たのしいピアノ.mp3'},
  { name : 'BGM2', url : 'music/ひとやすみ.mp3'},
  { name : 'BGM3', url : 'music/癒しの時間.mp3'},
];
let playMusic = new Audio();
let playFlag = false;
let playList = '<ul>';
for(let i=0; i < fileList.length; i++){
    playList +='<li onclick = PlayMusic("'+fileList[i].url+'")>'; //なんとなく分かるが言語化できない。
    playList += fileList[i].name +'</li>';//ここも。
}
playList +='</ul>';
document.getElementById("playListArea").innerHTML = playList;

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
