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

// category click

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

// category click end

// Wellcome Video

const wellcomeWrapper = document.querySelector(".welcome-wrapper");

setTimeout(() => {
  wellcomeWrapper.classList.add("loaderActive");
}, 8000);

// setTimeout(() => {
//   resetVideoAutoSlide();
// }, 8100);

// scroll to move hand upward

const boxes = document.querySelectorAll(".scroll-hand");

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

const box5 = document.querySelectorAll(".move-right-new");

window.addEventListener("scroll", () => {
  box5.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

const box6 = document.querySelectorAll(".banner-1");

window.addEventListener("scroll", () => {
  box6.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

const box = document.querySelectorAll(".move-right");

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

const box2 = document.querySelectorAll(".category-card");

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

const box1 = document.querySelectorAll(".move-left");

window.addEventListener("scroll", () => {
  box1.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

const box3 = document.querySelectorAll(".card_container");

window.addEventListener("scroll", () => {
  box3.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

const box4 = document.querySelectorAll(".pitch");

window.addEventListener("scroll", () => {
  box4.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

// ------------------ Video Slideshow ------------------

const videos = document.querySelectorAll(".slide-container video");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let counter = 0;

function updateSlide(index, shouldRestart = false) {
  videos.forEach((vid, i) => {
    vid.pause();
    if (shouldRestart || i !== index) {
      vid.currentTime = 0;
    }
    vid.classList.remove("active");
    dots[i].classList.remove("active");
  });

  videos[index].classList.add("active");
  dots[index].classList.add("active");
  videos[index].play();
}

function goNext() {
  counter = (counter + 1) % videos.length;
  updateSlide(counter);
}

function goPrev() {
  counter = (counter - 1 + videos.length) % videos.length;
  updateSlide(counter);
}

next.addEventListener("click", () => {
  goNext();
  resetVideoAutoSlide();
});

prev.addEventListener("click", () => {
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

let videoAutoSlide = setInterval(goNext, 5000);

function resetVideoAutoSlide() {
  clearInterval(videoAutoSlide);
  videoAutoSlide = setInterval(goNext, 5000);
}

// ------------------ Hero Section Slideshow ------------------

// const slide = document.querySelector(".slide");

// function autoSlideHero() {
//   const firstItem = slide.querySelector(".item");
//   slide.appendChild(firstItem);
//   updateSlideStyles();
// }

// function updateSlideStyles() {
//   const items = slide.querySelectorAll(".item");

//   items.forEach((item, index) => {
//     item.style.position = "absolute";
//     item.style.top = index <= 1 ? "0" : "85%";
//     item.style.transform = index <= 1 ? "translate(0, 0)" : "translate(0, -85%)";
//     item.style.borderRadius = index <= 1 ? "0" : "20px";
//     item.style.width = index <= 1 ? "100%" : "140px";
//     item.style.height = index <= 1 ? "100%" : "200px";
//     item.style.boxShadow = "0 10px 10px #505050";
//     item.style.backgroundPosition = index <= 1 ? "center" : "50% 50%";
//     item.style.backgroundSize = "cover";
//     item.style.transition = "0.5s";
//     item.style.opacity = "1";

//     if (index === 2) item.style.left = "78%";
//     else if (index === 3) item.style.left = "calc(74% + 215px)";
//     else if (index === 4) item.style.left = "calc(59% + 293px)";
//     else if (index >= 5) {
//       item.style.left = "calc(55% + 660px)";
//       item.style.opacity = "0";
//     } else {
//       item.style.left = "0";
//     }

//     const content = item.querySelector(".content");
//     if (content) {
//       content.style.display = index === 1 ? "block" : "none";
//     }
//   });
// }

// updateSlideStyles();
// setInterval(autoSlideHero, 5000);

// Gallery

// const products = [
//     {
//         id: 1,
//         name: "Product 1",
//         price: 10.99,
//         description: "This is product 1",
//         Img: "asset/images/category/Amber.jpeg"
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         price: 15.49,
//         description: "This is product 2",
//         Img: "asset/images/category/Amethyst.jpg"
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         price: 20.99,
//         description: "This is product 3",
//         Img: "asset/images/category/Diamond.jpg"
//     },
//     {
//         id: 4,
//         name: "Product 4",
//         price: 25.00,
//         description: "This is product 4",
//         Img: "asset/images/category/Ruby.jpg"
//     }
// ];

// const row = document.querySelector(".row");
// const galleryProducts = document.querySelector(".gallery-products");

// function displayProducts() {
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];

//         if (products.length > 0) {
//             row.innerHTML += `
//            <div class="col">
//                 <img src="${product.Img}" alt="">
//                 <h2>${product.name}</h2>
//                 <button class="btn" onClick="showProduct('${product.id}')">View Product</button>
//             </div>
//         `;
//         }

//     }
// }

// displayProducts();

// function showProduct(id) {
//     const product = products.find(product => product.id === parseInt(id));

//     galleryProducts.classList.toggle("toggleGallery");
//     galleryProducts.innerHTML = `
//        <div class="card">
//                 <div class="left">
//                     <img src="${product.Img}" alt="${product.name}">
//                     <i class="fa fa-long-arrow-left"></i>
//                     <i class="fa fa-long-arrow-right"></i>
//                 </div>
//                 <div class="right">
//                     <div class="product-info">
//                         <div class="product-name">
//                             <h1>${product.name}</h1>
//                             <i class="fa fa-search"></i>
//                             <i class="fa fa-user"></i>
//                             <i class="fa fa-shopping-cart"></i>
//                         </div>
//                         <div class="details">
//                             <h3>${product.description}</h3>
//                             <h2>${product.name}</h2>
//                             <h4><span class="fa fa-dollar"></span>${product.price}</h4>
//                         </div>
//                         <ul>
//                             <li>SIZE</li>
//                             <li class="bg">7</li>
//                             <li class="bg">8</li>
//                             <li class="bg">9</li>
//                             <li class="bg">10</li>
//                             <li class="bg">11</li>
//                         </ul>
//                         <span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
//                         <span class="foot"><i class="fa fa-shopping-cart"></i>Add TO Cart</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="controls">
//                 <button onClick="prev1('${product.id}')" class="prev">&#60;</button>
//                 <button onClick="next1('${product.id}')" class="next">&#62;</button>
//             </div>
//     `;
// }

// galleryProducts.addEventListener("click", function (e) {
//     if (!e.target.classList.contains("card")) {
//         galleryProducts.classList.toggle("toggleGallery");
//     }

// })

// function prev1(id) {
//     const currentIndex = products.findIndex(product => product.id === parseInt(id));
//     const prevIndex = (currentIndex - 1 + products.length) % products.length;
//     const prevProduct = products[prevIndex];
//     showProduct(prevProduct.id);
// }

// function next1(id) {
//     const currentIndex = products.findIndex(product => product.id === parseInt(id));
//     const nextIndex = (currentIndex + 1) % products.length;
//     const nextProduct = products[nextIndex];
//     showProduct(nextProduct.id);
// }

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
      img: "asset/images/collection/amber/bracelet.webp",
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
      img: "asset/images/collection/amethyst/bracelet.jpg",
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
      img: "asset/images/collection/ruby/necklace.webp",
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
  // Clear existing cards
  categoryCard.innerHTML = "";

  // Add product cards
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

  // Add "View More" button
  const viewMore = document.createElement("div");
  viewMore.className = "view-more";
  viewMore.innerHTML = `<button>View More &#10095;</button>`;
  categoryCard.appendChild(viewMore);
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

// Default: show diamond category on load
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
