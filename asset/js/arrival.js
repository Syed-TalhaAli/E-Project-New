const fixedDirectory = "asset/images/new arrivals/";
const newArrivalProductsElem = document.querySelector(".new_arrivals_products");
const productWrapper = document.querySelector(".gallery_products");

const arrivalProducts = [
  {
    id: 1,
    name: "Amethyst Bangle",
    discription:
      "Sleek design meets the calming charm of amethyst in this timeless bangle.",
    price: 100,
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
    name: "Round diamond ring",
    discription:
      "Fully encrusted with round diamonds, this claw-set ring radiates sparkle from every angle.",
    price: 100,
    image: `${fixedDirectory}Full Claw Set Round Diamond Ring.png`,
  },
  {
    id: 6,
    name: "Glacier diamond bracelet",
    discription:
      "Cool, clean, and radiant—diamonds flow like frozen light in this glacier-inspired bracelet.",
    price: 100,
    image: `${fixedDirectory}glacier_diamond_bracelet.png`,
  },
  {
    id: 7,
    name: "Ruby diamond earing",
    discription:
      "Striking ruby accents meet brilliant diamonds in a bold infinity silhouette that symbolizes forever.",
    price: 100,
    image: `${fixedDirectory}infinity-ruby-diamond-earrings.png`,
  },
  {
    id: 8,
    name: "Sapphire diamond",
    discription:
      "Where art meets elegance—sapphires and diamonds unite in a striking, Picasso-inspired ring.",
    price: 100,
    image: `${fixedDirectory}picasso-sapphire-and-diamond-ring.png`,
  },
  {
    id: 9,
    name: "Ruby & diamond bracelet",
    discription:
      "Alternating rubies and diamonds create a vibrant rhythm of color and sparkle in this sleek tennis bracelet.",
    price: 100,
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
          <p class="g_price">Price : ${product.price}$</p>
          <div class="g-btns-wrapper">
            <button>Buy Now</button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery_controls">
      <button onClick='prevProductSlide(${product.id})'>&#60;</button>
      <button onClick='nextProductSlide(${product.id})'>&#62;</button>
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

displayArrivalProducts();

let currentSlide = 0;
const slider = document.getElementById("bannerSlider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;

const n_prev = document.querySelector(".n-prev");
const n_next = document.querySelector(".n-next");
console.log(n_next);
console.log(n_prev);


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
