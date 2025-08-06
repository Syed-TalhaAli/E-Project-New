const slider = document.getElementById("bannerSlider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;
const n_prev = document.querySelector(".n-prev");
const n_next = document.querySelector(".n-next");
let currentSlide = 0;

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

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 10,
  speed: 400,
  scale: 1.02,
  glare: true,
  "max-glare": 0.6,
  perspective: 800,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  reset: true,
  transition: true,
  reverse: false,
  gyroscope: false,
});

// collection wrappper
const collectionOpen = document.getElementById("col-type");
const collectionWrapper = document.querySelector(".collection_wrapper");
const collectionClose = document.querySelector(".closeCol");
const categoryImg = document.querySelector(".category_img");

collectionOpen.addEventListener("click", () => {
  collectionWrapper.classList.add("colActive");
});

collectionClose.addEventListener("click", () => {
  collectionWrapper.classList.remove("colActive");
});

const items = document.querySelectorAll(".collection_card1 li");
const title = document.querySelector(".collection_card2 h2");
const productImage = document.getElementById("product-image");
const collection_card2 = document.querySelector(".collection_card2");

const images = {
  earrings: "asset/images/category/p1.jpg",
  rings: "asset/images/category/p3.webp",
  necklaces: "asset/images/category/p4.webp",
  bracelets: "asset/images/category/p5.webp",
};

items.forEach((item) => {
  item.addEventListener("click", () => {
    const type = item.getAttribute("data-type");

    if (type === "earrings") {
      categoryImg.src = "asset/images/category/p8.webp";
    } else if (type === "rings") {
      categoryImg.src = "asset/images/category/p6.webp";
    } else if (type === "necklaces") {
      categoryImg.src = "asset/images/category/p2.webp";
    } else {
      categoryImg.src = "asset/images/category/p7.jpg";
    }

    collection_card2.classList.remove("smoothActive");
    setTimeout(() => {
      title.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      productImage.src = images[type];
      collection_card2.classList.add("smoothActive");
    }, 10);
  });
});

// cursor
const wrapper = document.querySelector(".wrapper");
const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

function animate() {
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();

// cursor end