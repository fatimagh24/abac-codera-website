const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId.startsWith("#")) {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
};


window.addEventListener("scroll", updateActiveNavigation);

const scrollTopButton = document.querySelector("#scroll-top");

if (scrollTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            scrollTopButton.classList.add("visible");
        } else {
            scrollTopButton.classList.remove("visible");
        }
    });


    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
