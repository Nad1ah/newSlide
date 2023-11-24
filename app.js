let indexer = 1;

const slideNodes = document.querySelectorAll(".slide");

const slideArray = [...slideNodes];

function getActiveIndex() {
  return slideArray.findIndex((s) => s.classList.contains("active"));
}

function getNextSlide() {
  const actveIindex = getActiveIndex();

  let next = slideNodes[actveIindex + indexer];

  if (!next) {
    indexer = indexer * -1;
    next = slideNodes[actveIindex + indexer];
  }

  return next;
}

function executeSlideShow() {
  console.log(getActiveIndex());
  const currentSlide = slideNodes[getActiveIndex()];
  const nextSlide = getNextSlide();

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
  console.log("executeSlideshow");
}

let autoPlayerInterval = setInterval(executeSlideShow, 3000);

const pauseButton = document.querySelector("#btn-pause");
const playButton = document.querySelector("#btn-play");
const aplayButton = document.querySelector("#btn-aplay");

pauseButton.addEventListener("click", () => {
  clearInterval(autoPlayerInterval);
  autoPlayerInterval = undefined;
  pauseButton.setAttribute("disabled", "true");
  aplayButton.removeAttribute("disabled");
});

playButton.addEventListener("click", () => {
  executeSlideShow();
});

aplayButton.addEventListener("click", () => {
  if (autoPlayerInterval) return;
  aplayButton.setAttribute("disabled", "true");
  pauseButton.removeAttribute("disabled");

  executeSlideShow();
  autoPlayerInterval = setInterval(executeSlideShow, 2000);
});
