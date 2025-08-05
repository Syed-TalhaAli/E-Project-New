let currentSlide = 0;
const slider = document.getElementById("bannerSlider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;
const n_prev = document.querySelector(".n-prev");
const n_next = document.querySelector(".n-next");

n_next.addEventListener("click", nextSlide);
n_prev.addEventListener("click", prevSlide);

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
