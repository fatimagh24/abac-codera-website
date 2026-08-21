const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {

        const isOpen = question.getAttribute("aria-expanded") === "true";


        // Close all FAQ items
        faqItems.forEach((otherItem) => {

            const otherQuestion =
                otherItem.querySelector(".faq-question");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            const otherIcon =
                otherItem.querySelector(".faq-icon");

            otherQuestion.setAttribute("aria-expanded", "false");

            otherAnswer.style.maxHeight = null;

            otherIcon.style.transform = "rotate(0deg)";
        });


        // Open clicked item
        if (!isOpen) {

            question.setAttribute("aria-expanded", "true");

            answer.style.maxHeight = `${answer.scrollHeight}px`;

            icon.style.transform = "rotate(45deg)";
        }
    });
});
