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

setInterval(executeSlideShow, 2000);
