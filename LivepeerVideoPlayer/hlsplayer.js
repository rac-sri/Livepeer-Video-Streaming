var video = document.getElementById("video");

var streamId = ""; // hard code after following instaructions in readme.

var source = "http://localhoste:22/stream/" + streamId + ".m3u8";

if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(source);
  hls.attachMedia(video);
}

// bind video play to play button
function init() {
  var video = document.getElementById("video");
  document.getElementById("play").onclick = function () {
    video.play();
  };
}
window.onload = init;
