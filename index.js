const video = document.querySelector('.video');
const playButton = document.querySelector('.play-button');
const progressRange = document.querySelector('.progress-range');
const speed = document.querySelector('.speed');
const currentTime = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');

const pause = () => {
  video.pause();
  playButton.innerText = 'Play';
};

const play = () => {
  video.play();
  playButton.innerText = 'Pause';
};

const togglePlay = () => {
  if (video.paused) {
    play();
  } else {
    pause();
  }
};

const formatTime = (time) => {
  const timeInSeconds = Math.round(time);
  const minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
};

const updateProgress = () => {
  console.log('muted ===> ', video.muted);
  progressRange.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.innerText = formatTime(video.currentTime);
  durationTime.innerText = formatTime(video.duration);
};

const updateSpeed = () => {
  video.playbackRate = speed.value;
};

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
speed.addEventListener('change', updateSpeed);

console.log({ video });
