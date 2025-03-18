function toggleMenu() {
  const mobileNavbarSection = document.querySelector(".mobile-navbar-section");
  mobileNavbarSection.classList.add("active");
}

function closeMenu() {
  const mobileNavbarSection = document.querySelector(".mobile-navbar-section");
  mobileNavbarSection.classList.remove("active");
}

let video = document.getElementById("hero-video");
let button = document.querySelector(".overlay button");
let progressRing = document.querySelector(".progress-ring");

const circleCircumference = 2 * Math.PI * 31.329;

function toggleVideo() {
  if (video.paused) {
    video.play();
    updateButtonForPause();
  } else {
    video.pause();
    updateButtonForPlay();
  }
}

function updateButtonForPause() {
  button.innerHTML = `
    <svg
      width="2.5em"
      height="2.5em"
      viewBox="0 0 66 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="relative cursor-pointer md:h-[4em] md:w-[4em]"
      id="playPauseIcon"
    >
      <circle
        cx="32.329"
        cy="33.329"
        r="31.329"
        stroke="white"
        stroke-opacity="0.2"
        stroke-width="2"
      ></circle>
      <rect x="26" y="22" width="6" height="22" fill="white"></rect>
      <rect x="34" y="22" width="6" height="22" fill="white"></rect>
      <circle
        cx="32.329"
        cy="33.329"
        r="31.329"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="3"
        stroke-dasharray="${circleCircumference}"
        stroke-dashoffset="${
          circleCircumference * (1 - video.currentTime / video.duration)
        }"
        stroke-linecap="round"
        class="transition-all duration-300 progress-ring"
        transform="rotate(-90 32.329 33.329)"
      ></circle>
    </svg>`;
}

function updateButtonForPlay() {
  button.innerHTML = `
    <svg
      width="2.5em"
      height="2.5em"
      viewBox="0 0 66 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="relative cursor-pointer md:h-[4em] md:w-[4em]"
      id="playPauseIcon"
    >
      <circle
        cx="32.329"
        cy="33.329"
        r="31.329"
        stroke="white"
        stroke-opacity="0.2"
        stroke-width="2"
      ></circle>
      <path
        id="Polygon 1"
        d="M43.1519 32.7595L26.0633 42.6256L26.0633 22.8934L43.1519 32.7595Z"
        fill="white"
      ></path>
      <circle
        cx="32.329"
        cy="33.329"
        r="31.329"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="3"
        stroke-dasharray="${circleCircumference}"
        stroke-dashoffset="${
          circleCircumference * (1 - video.currentTime / video.duration)
        }"
        stroke-linecap="round"
        class="transition-all duration-300 progress-ring"
        transform="rotate(-90 32.329 33.329)"
      ></circle>
    </svg>`;
}

button.addEventListener("click", toggleVideo);

function updateProgressRing() {
  const duration = video.duration;
  const currentTime = video.currentTime;

  if (duration > 0) {
    const percentagePlayed = currentTime / duration;

    const offset = circleCircumference * (1 - percentagePlayed);

    progressRing.setAttribute("stroke-dashoffset", offset);
  }
}

video.addEventListener("timeupdate", updateProgressRing);
