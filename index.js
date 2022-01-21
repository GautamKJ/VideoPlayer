console.log("video Player");

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress_filled = player.querySelector('.progress_filled');
const progress = player.querySelector('.progress');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const range = player.querySelector('.player_slider');
let forward = player.querySelector('.forward');
let backward = player.querySelector('.backward');
let fullScreen__button = player.querySelector('.fullScreen__button');
let vol = document.getElementsByClassName('.player_slider');
let player_controls = player.querySelector('.player_controls');



console.log(player);
console.log(video);
console.log(toggle);
console.log(range);
console.log(skipButtons);

//               functions

function togglePlay() {
    let icon;
    if (video.paused) {
        icon = 'fa fa-pause';
        video.play();
    }

    else {
        video.pause();
        icon = 'fa fa-play';
    }
    const html = `  <button class="player__button toggle " title="Toggle play"> <i class="${icon}"></i></button>
    `
    toggle.innerHTML = html
    console.log(" video.currentTime-->", video.currentTime);
}
function skipForward() {

    console.log("skip");
    video.currentTime = video.currentTime + 10;

}
function skipBackward() {

    console.log("back");
    video.currentTime = video.currentTime - 10;

}

function fullScreen() {
    video.webkitEnterFullscreen();
    // video.setAttribute('style', 'width: 70vw; height:100vh; margin:0 ;padding :0');
}
function volume() {
    video.volume = range.value / 100;
    console.log(video.volume);
    range.title = `${range.value}`;
    console.log('vol');
}

function slider(e) {
    console.log(e);
    // let dist=e.offSet
    console.log('ran');
    let time = (video.currentTime / video.duration) * 100;
    progress_filled.setAttribute('style', `width:${time}%;`);

}
function sliderClick(e) {
    console.log(e.offsetX);
    console.log(progress.offsetWidth);
    let jump = (e.offsetX / progress.offsetWidth) * 100;
    video.currentTime = jump / 100 * video.duration;
    progress_filled.setAttribute('style', `width:${jump}%;`);

}


//                   addEventListener

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

forward.addEventListener('click', skipForward);
backward.addEventListener('click', skipBackward);
fullScreen__button.addEventListener('click', fullScreen);
video.addEventListener('timeupdate', () => {
    slider();
});
progress.addEventListener('click', sliderClick);
progress.addEventListener('drag', sliderClick);


range.addEventListener('mousemove', volume);
video.addEventListener('mousemove', () => {
    console.log('mousemove');

    player_controls.removeAttribute('style', 'display: none;');
});

video.addEventListener('mouseout', () => {

    console.log('mouseout');
    player_controls.setAttribute('style', 'display:none');

});

player_controls.addEventListener('mousemove', () => {
    console.log('mousemove');

    player_controls.removeAttribute('style', 'display: none;');
});

player_controls.addEventListener('mouseout', () => {

    console.log('mouseout');
    player_controls.setAttribute('style', 'display:none');

});

// keyboard
document.addEventListener('keydown', keys);
function keys(e) {
    console.log(e.key);
    switch (e.key) {
        case ' ': {
            togglePlay();
            break;
        }
        case 'ArrowRight': {
            skipForward();
            break;
        }
        case 'ArrowLeft': {
            skipBackward();
            break;
        }
    }

}


