const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");


// Open / close mobile menu
const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
};


// Toggle menu button
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", toggleMenu);
}


// Close menu after clicking a navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


// Close menu with ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.focus();
    }
});
