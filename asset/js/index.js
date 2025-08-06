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


// // slide videos
// const videos = document.querySelectorAll(".slide-container video");
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");
// const dots = document.querySelectorAll(".dot");
// let counter = 0;


// function updateSlide(index, shouldRestart = false) {
//     videos.forEach((vid, i) => {
//         vid.pause();
//         if (shouldRestart || i !== index) {
//             vid.currentTime = 0;
//         }
//         vid.classList.remove("active");
//         dots[i].classList.remove("active");
//     });

//     videos[index].classList.add("active");
//     dots[index].classList.add("active");
//     videos[index].play();
// }

// function goPrev() {
//     counter = (counter - 1 + videos.length) % videos.length;
//     updateSlide(counter);
// }

// function goNext() {
//     counter = (counter + 1 + videos.length) % videos.length;
//     updateSlide(counter);
// }


// nextBtn.addEventListener("click", () => {
//     goNext();
//     resetVideoAutoSlide();
// });

// prevBtn.addEventListener("click", () => {
//     goPrev();
//     resetVideoAutoSlide();
// });

// dots.forEach((dot) => {
//     dot.addEventListener("click", () => {
//         counter = parseInt(dot.getAttribute("data-index"));
//         updateSlide(counter, true);
//         resetVideoAutoSlide();
//     });
// });

// let videoAutoSlide = setInterval(goNext, 5000);

// function resetVideoAutoSlide() {
//     clearInterval(videoAutoSlide);
//     videoAutoSlide = setInterval(goNext, 5000);
// }

// Select only the main slider videos
// const videos = document.querySelectorAll(".slider-video");
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");
// const dots = document.querySelectorAll(".dot");
// let counter = 0;

// function updateSlide(index, shouldRestart = false) {
//   videos.forEach((vid, i) => {
//     vid.pause();
//     if (shouldRestart || i !== index) {
//       vid.currentTime = 0;
//     }
//     vid.classList.remove("active");

//     if (dots[i]) {
//       dots[i].classList.remove("active");
//     }
//   });

//   videos[index].classList.add("active");

//   if (dots[index]) {
//     dots[index].classList.add("active");
//   }

//   videos[index].play();
// }

// function goPrev() {
//   counter = (counter - 1 + videos.length) % videos.length;
//   updateSlide(counter);
// }

// function goNext() {
//   counter = (counter + 1) % videos.length;
//   updateSlide(counter);
// }

// nextBtn.addEventListener("click", () => {
//   goNext();
//   resetVideoAutoSlide();
// });

// prevBtn.addEventListener("click", () => {
//   goPrev();
//   resetVideoAutoSlide();
// });

// dots.forEach((dot) => {
//   dot.addEventListener("click", () => {
//     counter = parseInt(dot.getAttribute("data-index"));
//     updateSlide(counter, true);
//     resetVideoAutoSlide();
//   });
// });

// let videoAutoSlide = setInterval(goNext, 5000);

// function resetVideoAutoSlide() {
//   clearInterval(videoAutoSlide);
//   videoAutoSlide = setInterval(goNext, 5000);
// }
// Select only videos from big screen slider
const videos = document.querySelectorAll(".bigScreen .slider-video");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const dots = document.querySelectorAll(".dot");
let counter = 0;

// Update visible slide
function updateSlide(index, shouldRestart = false) {
  videos.forEach((vid, i) => {
    vid.pause();
    if (shouldRestart || i !== index) {
      vid.currentTime = 0;
    }
    vid.classList.remove("active");
    if (dots[i]) {
      dots[i].classList.remove("active");
    }
  });

  videos[index].classList.add("active");
  if (dots[index]) {
    dots[index].classList.add("active");
  }
  videos[index].play();
}

// Navigation
function goPrev() {
  counter = (counter - 1 + videos.length) % videos.length;
  updateSlide(counter);
}

function goNext() {
  counter = (counter + 1) % videos.length;
  updateSlide(counter);
}

// Events
nextBtn.addEventListener("click", () => {
  goNext();
  resetVideoAutoSlide();
});

prevBtn.addEventListener("click", () => {
  goPrev();
  resetVideoAutoSlide();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    counter = parseInt(dot.getAttribute("data-index"));
    updateSlide(counter, true);
    resetVideoAutoSlide();
  });
});

// Auto-slide every 5 seconds
let videoAutoSlide = setInterval(goNext, 5000);

function resetVideoAutoSlide() {
  clearInterval(videoAutoSlide);
  videoAutoSlide = setInterval(goNext, 5000);
}


// Collection JavaScript
const categoryLinks = document.querySelectorAll(".category-nav a");
const categoryCard = document.querySelector(".category-card");

const products = {
    diamond: [
        {
            img: "asset/images/collection/diamond/ring.webp",
            name: "Ring",
            price: "$110.00",
        },
        {
            img: "asset/images/collection/diamond/earrings.jpg",
            name: "Earrings",
            price: "$110.00",
        },
        {
            img: "asset/images/collection/diamond/necklace.jpg",
            name: "Necklace",
            price: "$110.00",
        },
    ],
    amber: [
        {
            img: "asset/images/collection/amber/ring.webp",
            name: "Ring",
            price: "$90.00",
        },
        {
            img: "asset/images/collection/amber/bracelet.png",
            name: "Bracelet",
            price: "$95.00",
        },
        {
            img: "asset/images/collection/amber/pendant.jpg",
            name: "Pendant",
            price: "$99.00",
        },
    ],
    amethyst: [
        {
            img: "asset/images/collection/amethyst/bracelet.png",
            name: "Bracelet",
            price: "$85.00",
        },
        {
            img: "asset/images/collection/amethyst/necklace.webp",
            name: "Necklace",
            price: "$88.00",
        },
        {
            img: "asset/images/collection/amethyst/ring.webp",
            name: "Ring",
            price: "$89.00",
        },
    ],
    ruby: [
        {
            img: "asset/images/collection/ruby/earring.avif",
            name: "Earrings",
            price: "$120.00",
        },
        {
            img: "asset/images/collection/ruby/necklace.png",
            name: "Necklace",
            price: "$125.00",
        },
        {
            img: "asset/images/collection/ruby/ring.jpg",
            name: "Ring",
            price: "$130.00",
        },
    ],
    turquoise: [
        {
            img: "asset/images/collection/turquoise/ring2.jpg",
            name: "Ring",
            price: "$105.00",
        },
        {
            img: "asset/images/collection/turquoise/pendant.jpg",
            name: "Pendant",
            price: "$108.00",
        },
        {
            img: "asset/images/collection/turquoise/ring.jpg",
            name: "Ring",
            price: "$110.00",
        },
    ],
};

function renderCategory(category) {
    categoryCard.innerHTML = "";

    products[category].forEach((product) => {
        const card = document.createElement("div");
        card.className = "card-1";
        card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
      `;
        categoryCard.appendChild(card);
    });
}

// Event listeners for category clicks
categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove 'active' from all, add to clicked one
        categoryLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        // Load products for selected category
        const selectedCategory = link.getAttribute("data-category");
        renderCategory(selectedCategory);
    });
});

renderCategory("diamond");

categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove 'active' class from all links
        categoryLinks.forEach((l) => l.classList.remove("active"));

        // Add 'active' class to the clicked one
        link.classList.add("active");

        // Load the relevant category
        const selectedCategory = link.getAttribute("data-category");
        renderCategory(selectedCategory);
    });
});

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

VanillaTilt.init(document.querySelectorAll(".grid_img_card img"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 1,
    perspective: 800,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    reset: true,
    transition: true,
    reverse: false,
    gyroscope: false,
});

// scroll to move hand upward
const boxes = document.querySelectorAll(".scroll-hand");
const box = document.querySelectorAll(".move-right");
const box2 = document.querySelectorAll(".category-card");

window.addEventListener("scroll", () => {
    boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 300) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});

window.addEventListener("scroll", () => {
    box.forEach((box) => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});

window.addEventListener("scroll", () => {
    box2.forEach((box) => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});