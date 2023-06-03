export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Toggle fullscreen mode
export function toggleFullscreen() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
}

// Enter fullscreen mode
export async function enterFullscreen(element = document.documentElement) {
  if (element?.requestFullscreen) {
    await element.requestFullscreen();
  } else if (element?.webkitRequestFullscreen) {
    await element.webkitRequestFullscreen();
  } else if (element?.mozRequestFullScreen) {
    await element.mozRequestFullScreen();
  } else if (element?.msRequestFullscreen) {
    await element.msRequestFullscreen();
  }
}

// Exit fullscreen mode
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
