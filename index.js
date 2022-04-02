const sliderImages = document.getElementsByTagName('section')
const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')
let currentImg = 0

function clearIMages() {
  for (let index = 0; index < sliderImages.length; index++) {
    sliderImages[index].style.display = 'none'
  }
}

function startSlide() {
  clearIMages()
  sliderImages[0].style.display = 'block'
}

function slideLeft() {
  clearIMages()
  sliderImages[currentImg - 1].style.display = 'block'
  currentImg--
  if (currentImg <= 3) {
    rightArrow.style.opacity = 1
    rightArrow.style.pointerEvents = 'visible'
  }
  if (currentImg === 0) {
    leftArrow.style.opacity = 0
    leftArrow.style.pointerEvents = 'none'
  }
  if (currentImg === 3) {
    rightArrow.style.opacity = 0
    leftArrow.style.opacity = 1
  }
}

function slideRight() {
  clearIMages()
  sliderImages[currentImg + 1].style.display = 'block'
  currentImg++

  if (currentImg === 3) {
    rightArrow.style.opacity = 0
    rightArrow.style.pointerEvents = 'none'
  }
  if (currentImg > 0) {
    leftArrow.style.pointerEvents = 'visible'
    leftArrow.style.opacity = 1
  }
  if (currentImg === 0) {
    leftArrow.style.opacity = 0
    rightArrow.style.opacity = 1
  }
}

leftArrow.addEventListener('click', function () {
  if (currentImg === 0) {
    currentImg = sliderImages.length
  }
  slideLeft()
})

rightArrow.addEventListener('click', function () {
  if (currentImg === sliderImages.length - 1) {
    currentImg = -1
  }
  slideRight()
})

startSlide()
