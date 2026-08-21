
const revealElements = document.querySelectorAll(
    ".section-header, .feature-card, .roadmap-step, .testimonial-card, .faq-item, .contact-form"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("reveal-visible");

            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.1
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const statistics = document.querySelectorAll(".stat-number");


const animateCounter = (element) => {

    const target = Number(element.dataset.target);

    let current = 0;

    const duration = 1500;

    const startTime = performance.now();


    const updateCounter = (currentTime) => {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        current = Math.floor(progress * target);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };


    requestAnimationFrame(updateCounter);
};


const statisticsObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            animateCounter(entry.target);

            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.5
    }
);


statistics.forEach((statistic) => {
    statisticsObserver.observe(statistic);
});
