const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#forward');
const $back = document.querySelector('#back');


$play.addEventListener('click',reproducir);
$pause.addEventListener('click',detener);
$backward.addEventListener('click',delantar);
$back.addEventListener('click',retroceder);

function reproducir(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function detener(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function delantar(){
    $video.currentTime =  $video.currentTime + 10 ;
}

function retroceder(){
    $video.currentTime =  $video.currentTime - 10 ;
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata',cargar);
$video.addEventListener('timeupdate',cargarTime);

function cargar(){
    $progress.max = $video.duration;
 
}

function cargarTime(){
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input',barrita);

function barrita(){
    $video.currentTime = $progress.value;
}