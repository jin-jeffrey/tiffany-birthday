const scrollContainer = document.querySelector("main");
let audio = document.getElementById("myAudio");
let playButton = document.getElementById("playButton")
let catPhase = 1;
let playingSong = false;

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    document.getElementById("cat").src="./cat/"+ String(catPhase%12) +".gif"
    catPhase++;
});

function player() {
    if (playingSong) {
        audio.play();
        playButton.src = "sound_off.png";
    }
    else {
        audio.pause();
        playButton.src = "sound_on.png";
    };
    playingSong = !playingSong;
}