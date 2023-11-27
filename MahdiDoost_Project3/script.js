var video = document.querySelector('video');
var previousBtn = document.querySelector('.previous');
var nextBtn = document.querySelector('.next');


function goBack() {
    video.currentTime -=3;
}
function goForward() {
    video.currentTime +=3;
}

previousBtn.addEventListener('click',goBack);
nextBtn.addEventListener('click',goForward);
