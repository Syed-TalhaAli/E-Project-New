const fixedDirectory = "asset/images/new arrivals/";
const newArrivalProductsElem = document.querySelector(".new_arrivals_products");
const productWrapper = document.querySelector(".gallery_products");
const slider = document.getElementById("bannerSlider");
const imageSlides = slider.querySelectorAll("img");
const totalSlides = imageSlides.length;
const n_prev = document.querySelector(".n-prev");
const n_next = document.querySelector(".n-next");
let currentSlide = 0;

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

n_next.addEventListener("click", nextSlide);
n_prev.addEventListener("click", prevSlide);


const arrivalProducts = [
  {
    id: 1,
    name: "Amethyst Bangle",
    discription:
      "Sleek design meets the calming charm of amethyst in this timeless bangle.",
    price: 140,
    image: `${fixedDirectory}amethyst_bangle.png`,
  },
  {
    id: 2,
    name: "Diamond Ring",
    discription:
      "Timeless elegance crafted in every facet. Discover brilliance with our exquisite diamond rings.",
    price: 100,
    image: `${fixedDirectory}Diamond rings.png`,
  },
  {
    id: 3,
    name: "Diamond Necklace",
    discription:
      "Intricately set diamonds form a radiant nest design—sophisticated, timeless, unforgettable.",
    price: 120,
    image: `${fixedDirectory}diamond-nest-necklace.png`,
  },
  {
    id: 4,
    name: "Diamonds & Blue Sapphires",
    discription:
      "Diamonds sparkle beside royal blue sapphires in this striking, sophisticated design.",
    price: 150,
    image: `${fixedDirectory}diamonds and blue sapphires.png`,
  },
  {
    id: 5,
    name: "Round Diamond Ring",
    discription:
      "Fully encrusted with round diamonds, this claw-set ring radiates sparkle from every angle.",
    price: 170,
    image: `${fixedDirectory}Full Claw Set Round Diamond Ring.png`,
  },
  {
    id: 6,
    name: "Glacier Diamond Bracelet",
    discription:
      "Cool, clean, and radiant—diamonds flow like frozen light in this glacier-inspired bracelet.",
    price: 130,
    image: `${fixedDirectory}glacier_diamond_bracelet.png`,
  },
  {
    id: 7,
    name: "Ruby Diamond Earing",
    discription:
      "Striking ruby accents meet brilliant diamonds in a bold infinity silhouette that symbolizes forever.",
    price: 119,
    image: `${fixedDirectory}infinity-ruby-diamond-earrings.png`,
  },
  {
    id: 8,
    name: "Sapphire Diamond",
    discription:
      "Where art meets elegance—sapphires and diamonds unite in a striking, Picasso-inspired ring.",
    price: 109,
    image: `${fixedDirectory}picasso-sapphire-and-diamond-ring.png`,
  },
  {
    id: 9,
    name: "Ruby & Diamond Bracelet",
    discription:
      "Alternating rubies and diamonds create a vibrant rhythm of color and sparkle in this sleek tennis bracelet.",
    price: 111,
    image: `${fixedDirectory}ruby-and-diamond-tennis-bracelet.png`,
  },
];

function displayArrivalProducts() {

  if (arrivalProducts.length > 0) {
    arrivalProducts.forEach((product) => {
      newArrivalProductsElem.innerHTML += `
        <article class="card__articale" onClick='openArrivalProduct(${product.id})'>
          <img src="${product.image}" alt="${product.name}" class='card__img'/>
          <div class="card__clip">
            <i class="fa-solid fa-ellipsis-vertical" onClick='openArrivalProduct(${product.id})'></i>
          </div>
        </article>`;
    });
  }

}

function openArrivalProduct(id = null) {
  if (id == null) return;

  const product = arrivalProducts.find((p) => p.id === id);
  if (!product) return;

  productWrapper.classList.add("activeGallery");

  productWrapper.innerHTML = `
    <div class="gallery_p_card">
      <div class="gallery_p_card_left">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="gallery_p_card_right">
        <div class="gallery_content">
          <h2>${product.name}</h2>
          <p>${product.discription}</p>
          <p class="g_price">Price : $${product.price}</p>
          <div class="g-btns-wrapper">
            <button>Buy Now</button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery_controls">
      <button onClick='prevProductSlide(${product.id})'>&#10094;</button>
      <button onClick='nextProductSlide(${product.id})'>&#10095;</button>
    </div>`;
}

function prevProductSlide(currentId) {
  const currentIndex = arrivalProducts.findIndex((p) => p.id === currentId);
  const prevIndex =
    (currentIndex - 1 + arrivalProducts.length) % arrivalProducts.length;
  openArrivalProduct(arrivalProducts[prevIndex].id);
}

function nextProductSlide(currentId) {
  const currentIndex = arrivalProducts.findIndex((p) => p.id === currentId);
  const nextIndex = (currentIndex + 1) % arrivalProducts.length;
  openArrivalProduct(arrivalProducts[nextIndex].id);
}

productWrapper.addEventListener("click", function (e) {
  if (
    !e.target.closest(".gallery_p_card") &&
    !e.target.closest(".gallery_controls")
  ) {
    productWrapper.classList.remove("activeGallery");
    productWrapper.innerHTML = "";
  }
});


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


displayArrivalProducts();
setInterval(nextSlide, 4000);
