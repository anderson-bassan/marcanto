// Get the elements
const slider = document.querySelector('.videoSlider');
const slides = slider.querySelectorAll('.slide');
const slideCount = slides.length;
let currentSlide = 0;

// Show the first slide
slides[currentSlide].classList.add('active');

// Get the slider dots
const sliderDots = document.querySelectorAll('.slider-dot');

// Start the slider
setInterval(() => {
  // Remove the active class from the current slide
  slides[currentSlide].classList.remove('active');

  // Remove active class from all dots
  sliderDots.forEach(dot => dot.classList.remove('active'));

  // Increment the slide counter
  currentSlide++;

  // If we've reached the end, start over from the beginning
  if (currentSlide === slideCount) {
    currentSlide = 0;
  }

  // Add the active class to the next slide and dot
  slides[currentSlide].classList.add('active');
  sliderDots[currentSlide].classList.add('active');
}, 5000);

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.style.display = "none";
  content.style.display = "block";
});