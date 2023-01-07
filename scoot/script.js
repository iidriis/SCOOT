const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector(".site-nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});