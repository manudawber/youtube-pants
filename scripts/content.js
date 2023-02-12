const videoContainerElement = "ytd-grid-video-renderer"
const shortsIdentifier = `overlay-style="SHORTS"`

function remove_shorts() {
  const videos = document.querySelectorAll(videoContainerElement)
  for (const video of videos) {
    if (video.innerHTML.includes(shortsIdentifier)) {
      video.style.display = "None";
    }
  }
  setTimeout(remove_shorts, 1000);
}

window.onload = remove_shorts()
