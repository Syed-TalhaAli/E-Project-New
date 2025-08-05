const openSidebar = document.getElementById("noneMenu");
const closeSidebar = document.getElementById("closeMenu");
const sidebar = document.querySelector(".navbar");

openSidebar.addEventListener("click", () => {
    sidebar.style.left = 0;
} );

closeSidebar.addEventListener("click", () => {
    sidebar.style.left = -300 + "%";
} );