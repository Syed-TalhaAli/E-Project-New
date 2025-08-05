const manageProducts = [
    {
        id: 1,
        category: "Diamond",
        categoryProducts: [
            { id: 1, name: "Diamond Bracelet", price: 2500, image: "asset/images/All Products/Diamond/Bracelet/1.png" },
            { id: 1, name: "Diamond Bracelet", price: 2500, image: "asset/images/All Products/Diamond/Bracelet/2.png" },
            { id: 1, name: "Diamond Bracelet", price: 2500, image: "asset/images/All Products/Diamond/Bracelet/3.png" },
            { id: 1, name: "Diamond Bracelet", price: 2500, image: "asset/images/All Products/Diamond/Bracelet/4.png" },

            { id: 2, name: "Diamond Earrings", price: 4500, image: "asset/images/All Products/Diamond/Earring/1.png" },
            { id: 2, name: "Diamond Earrings", price: 4500, image: "asset/images/All Products/Diamond/Earring/2.png" },
            { id: 2, name: "Diamond Earrings", price: 4500, image: "asset/images/All Products/Diamond/Earring/3.png" },
            { id: 2, name: "Diamond Earrings", price: 4500, image: "asset/images/All Products/Diamond/Earring/4.png" },

            { id: 3, name: "Diamond pendent", price: 1800, image: "asset/images/All Products/Diamond/Pendent/1.png" },
            { id: 3, name: "Diamond pendent", price: 1800, image: "asset/images/All Products/Diamond/Pendent/2.png" },
            { id: 3, name: "Diamond pendent", price: 1800, image: "asset/images/All Products/Diamond/Pendent/3.png" },
            { id: 3, name: "Diamond pendent", price: 1800, image: "asset/images/All Products/Diamond/Pendent/4.png" },

            { id: 4, name: "Diamond Ring", price: 3000, image: "asset/images/All Products/Diamond/Ring/diamond ring 1.png" },
            { id: 4, name: "Diamond Ring", price: 3000, image: "asset/images/All Products/Diamond/Ring/diamond_ring_2.png" },
            { id: 4, name: "Diamond Ring", price: 3000, image: "asset/images/All Products/Diamond/Ring/diamond_ring_3.png" },
            { id: 4, name: "Diamond Ring", price: 3000, image: "asset/images/All Products/Diamond/Ring/diamond_ring_4.png" },
        ],
    },
    {
        id: 2,
        category: "Ruby",
        categoryProducts: [
            { id: 5, name: "Ruby Ring", price: 2200, image: "asset//images/All Products/Ruby/Ring/1.png" },
            { id: 5, name: "Ruby Ring", price: 2200, image: "asset//images/All Products/Ruby/Ring/2.png" },
            { id: 5, name: "Ruby Ring", price: 2200, image: "asset//images/All Products/Ruby/Ring/3.png" },
            { id: 5, name: "Ruby Ring", price: 2200, image: "asset//images/All Products/Ruby/Ring/4.png" },

            { id: 6, name: "Ruby Pendent", price: 4000, image: "asset//images/All Products/Ruby/Pendent/1.png" },
            { id: 6, name: "Ruby Pendent", price: 4000, image: "asset//images/All Products/Ruby/Pendent/2.png" },
            { id: 6, name: "Ruby Pendent", price: 4000, image: "asset//images/All Products/Ruby/Pendent/3.png" },
            { id: 6, name: "Ruby Pendent", price: 4000, image: "asset//images/All Products/Ruby/Pendent/4.png" },

            { id: 7, name: "Ruby Earring", price: 1600, image: "asset//images/All Products/Ruby/Earring/1.png" },
            { id: 7, name: "Ruby Earring", price: 1600, image: "asset//images/All Products/Ruby/Earring/2.png" },
            { id: 7, name: "Ruby Earring", price: 1600, image: "asset//images/All Products/Ruby/Earring/3.png" },
            { id: 7, name: "Ruby Earring", price: 1600, image: "asset//images/All Products/Ruby/Earring/4.png" },

            { id: 8, name: "Ruby Bracelet", price: 2800, image: "asset//images/All Products/Ruby/Bracelet/1.png" },
            { id: 8, name: "Ruby Bracelet", price: 2800, image: "asset//images/All Products/Ruby/Bracelet/2.png" },
            { id: 8, name: "Ruby Bracelet", price: 2800, image: "asset//images/All Products/Ruby/Bracelet/3.png" },
            { id: 8, name: "Ruby Bracelet", price: 2800, image: "asset//images/All Products/Ruby/Bracelet/4.png" },
        ],
    },
    {
        id: 3,
        category: "Amber",
        categoryProducts: [
            { id: 9, name: "Amber Bracelet", price: 1500, image: "asset/images/All Products/Amber/Bracelet/amber 1.png" },
            { id: 9, name: "Amber Bracelet", price: 1500, image: "asset/images/All Products/Amber/Bracelet/amber 2.png" },
            { id: 9, name: "Amber Bracelet", price: 1500, image: "asset/images/All Products/Amber/Bracelet/amber 3.png" },
            { id: 9, name: "Amber Bracelet", price: 1500, image: "asset/images/All Products/Amber/Bracelet/amber 4.png" },

            { id: 10, name: "Amber Ring", price: 1700, image: "asset/images/All Products/Amber/Ring/amber 1.png" },
            { id: 10, name: "Amber Ring", price: 1700, image: "asset/images/All Products/Amber/Ring/amber 2.png" },
            { id: 10, name: "Amber Ring", price: 1700, image: "asset/images/All Products/Amber/Ring/amber 3.png" },
            { id: 10, name: "Amber Ring", price: 1700, image: "asset/images/All Products/Amber/Ring/amber 4.png" },

            { id: 11, name: "Amber Pendent", price: 2300, image: "asset/images/All Products/Amber/Pendent/1.png" },
            { id: 11, name: "Amber Pendent", price: 2300, image: "asset/images/All Products/Amber/Pendent/2.png" },
            { id: 11, name: "Amber Pendent", price: 2300, image: "asset/images/All Products/Amber/Pendent/3.png" },
            { id: 11, name: "Amber Pendent", price: 2300, image: "asset/images/All Products/Amber/Pendent/4.png" },

            { id: 12, name: "Amber Earrings", price: 1900, image: "asset/images/All Products/Amber/Earring/1.png" },
            { id: 12, name: "Amber Earrings", price: 1900, image: "asset/images/All Products/Amber/Earring/2.png" },
            { id: 12, name: "Amber Earrings", price: 1900, image: "asset/images/All Products/Amber/Earring/3.png" },
            { id: 12, name: "Amber Earrings", price: 1900, image: "asset/images/All Products/Amber/Earring/4.png" },
        ],
    },
    {
        id: 4,
        category: "Turquoise",
        categoryProducts: [
            { id: 13, name: "Turquoise Ring", price: 1400, image: "asset//images/All Products/Turquois/Ring/1.png" },
            { id: 13, name: "Turquoise Ring", price: 1400, image: "asset//images/All Products/Turquois/Ring/2.png" },
            { id: 13, name: "Turquoise Ring", price: 1400, image: "asset//images/All Products/Turquois/Ring/3.png" },
            { id: 13, name: "Turquoise Ring", price: 1400, image: "asset//images/All Products/Turquois/Ring/4.png" },

            { id: 14, name: "Turquoise Pendent", price: 2700, image: "asset//images/All Products/Turquois/Pendent/1.png" },
            { id: 14, name: "Turquoise Pendent", price: 2700, image: "asset//images/All Products/Turquois/Pendent/2.png" },
            { id: 14, name: "Turquoise Pendent", price: 2700, image: "asset//images/All Products/Turquois/Pendent/3.png" },
            { id: 14, name: "Turquoise Pendent", price: 2700, image: "asset//images/All Products/Turquois/Pendent/4.png" },

            { id: 15, name: "Turquoise Bracelet", price: 2100, image: "asset//images/All Products/Turquois/Bracelet/1.png" },
            { id: 15, name: "Turquoise Bracelet", price: 2100, image: "asset//images/All Products/Turquois/Bracelet/2.png" },
            { id: 15, name: "Turquoise Bracelet", price: 2100, image: "asset//images/All Products/Turquois/Bracelet/3.png" },
            { id: 15, name: "Turquoise Bracelet", price: 2100, image: "asset//images/All Products/Turquois/Bracelet/4.png" },

            { id: 16, name: "Turquoise Earrings", price: 1600, image: "asset//images/All Products/Turquois/Earring/1.png" },
            { id: 16, name: "Turquoise Earrings", price: 1600, image: "asset//images/All Products/Turquois/Earring/2.png" },
            { id: 16, name: "Turquoise Earrings", price: 1600, image: "asset//images/All Products/Turquois/Earring/3.png" },
            { id: 16, name: "Turquoise Earrings", price: 1600, image: "asset//images/All Products/Turquois/Earring/4.png" },
        ],
    },
    {
        id: 5,
        category: "Amethyst",
        categoryProducts: [
            { id: 17, name: "Amethyst Ring", price: 1900, image: "asset/images/All Products/Amethyst/Ring/1.png" },
            { id: 17, name: "Amethyst Ring", price: 1900, image: "asset/images/All Products/Amethyst/Ring/2.png" },
            { id: 17, name: "Amethyst Ring", price: 1900, image: "asset/images/All Products/Amethyst/Ring/3.png" },
            { id: 17, name: "Amethyst Ring", price: 1900, image: "asset/images/All Products/Amethyst/Ring/4.png" },

            { id: 18, name: "Amethyst Pendent", price: 3100, image: "asset/images/All Products/Amethyst/Pendent/1.png" },
            { id: 18, name: "Amethyst Pendent", price: 3100, image: "asset/images/All Products/Amethyst/Pendent/2.png" },
            { id: 18, name: "Amethyst Pendent", price: 3100, image: "asset/images/All Products/Amethyst/Pendent/3.png" },
            { id: 18, name: "Amethyst Pendent", price: 3100, image: "asset/images/All Products/Amethyst/Pendent/4.png" },

            { id: 19, name: "Amethyst Earrings", price: 1700, image: "asset/images/All Products/Amethyst/Earring/1.png" },
            { id: 19, name: "Amethyst Earrings", price: 1700, image: "asset/images/All Products/Amethyst/Earring/2.png" },
            { id: 19, name: "Amethyst Earrings", price: 1700, image: "asset/images/All Products/Amethyst/Earring/3.png" },
            { id: 19, name: "Amethyst Earrings", price: 1700, image: "asset/images/All Products/Amethyst/Earring/4.png" },

            { id: 20, name: "Amethyst Bracelet", price: 2400, image: "asset/images/All Products/Amethyst/Bracelet/1.png" },
            { id: 20, name: "Amethyst Bracelet", price: 2400, image: "asset/images/All Products/Amethyst/Bracelet/2.png" },
            { id: 20, name: "Amethyst Bracelet", price: 2400, image: "asset/images/All Products/Amethyst/Bracelet/3.png" },
            { id: 20, name: "Amethyst Bracelet", price: 2400, image: "asset/images/All Products/Amethyst/Bracelet/4.png" },
        ],
    },
];

const bxContainer = document.querySelector(".bx-container");
const menuCategories = document.querySelector(".menu");

displayProducts("All Products");

menuCategories.addEventListener("click", (e) => {
    const targetElem = e.target;

    if (targetElem.tagName !== "LI") return;

    document.querySelectorAll(".menu li").forEach((li) => li.classList.remove("active"));

    targetElem.classList.add("active");
    displayProducts(targetElem.textContent);
});

function displayProducts(categoryName) {
    bxContainer.innerHTML = "";

    let productsToDisplay = [];

    if (categoryName.toLowerCase() === "all products") {
        manageProducts.forEach((cat) => {
            productsToDisplay.push(...cat.categoryProducts);
        });
    } else {
        const foundCategory = manageProducts.find(
            (item) => item.category.toLowerCase() === categoryName.toLowerCase().trim()
        );
        if (foundCategory) {
            productsToDisplay = foundCategory.categoryProducts;
        }
    }

    productsToDisplay.forEach((product) => {
        bxContainer.innerHTML += `
      <div class="card">
        <div class="imageBx">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="contentBx">
          <h2>${product.name}</h2>
          <p class="p-p-price">Price: $${product.price}</p>
          <button class="addToCartBtn">
            Buy Now
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;
    });
}

// slider js 
const slider = document.querySelector(".product-slider");
const slides = document.querySelectorAll(".product-slider img");
const prevBtn = document.querySelector(".p-n-prev");
const nextBtn = document.querySelector(".p-n-next");

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});
