// create a module for our project
(() => {
  // select and work with our audio element
  console.log('fired!');
//variabler at the top
  let theAudio = document.querySelector("audio"),
      controlButtons = document.querySelectorAll(".audio-controls button"),
      albumArt = document.querySelectorAll(".track-ref");
//functions go here
  function loadTrack() {
    //debugger;
    //grap the value of the custom data attribute
    let targetTrack = this.dataset.trackref;

    //load the new audio source
    theAudio.src = `audio/${targetTrack}.mp3`;
    theAudio.volume = 0.5;
    // load and play the new source
    theAudio.load();
    playTrack();

  }

  function rewindTrack() {
    //rewind the current track back to the beginning
    theAudio.currentTime = 0;
  }
  function stopTrack() {
    //roud breackets is a method -> something the element can do
    theAudio.pause();
  }

  function playTrack() {
    //run the play method ()
    theAudio.play();
  }
//event handling at the bottom
for (cover of albumArt) {
  cover.addEventListener("click", loadTrack);
}

// get the play putton -> the first element in the collection
controlButtons[0].addEventListener("click", playTrack);
controlButtons[1].addEventListener("click", stopTrack);
controlButtons[2].addEventListener("click", rewindTrack);
})()
