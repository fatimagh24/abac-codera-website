const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const subjectError = document.querySelector("#subject-error");
    const messageError = document.querySelector("#message-error");

    const successMessage = document.querySelector("#form-success");


    // Email validation
    const isValidEmail = (email) => {
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);
    };


    // Clear previous errors
    const clearErrors = () => {

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";

        nameInput.removeAttribute("aria-invalid");
        emailInput.removeAttribute("aria-invalid");
        subjectInput.removeAttribute("aria-invalid");
        messageInput.removeAttribute("aria-invalid");
    };


    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        clearErrors();

        successMessage.textContent = "";

        let isValid = true;


        // Name
        if (nameInput.value.trim() === "") {

            nameError.textContent =
                "Please enter your full name.";

            nameInput.setAttribute("aria-invalid", "true");

            isValid = false;
        }


        // Email
        if (emailInput.value.trim() === "") {

            emailError.textContent =
                "Please enter your email.";

            emailInput.setAttribute("aria-invalid", "true");

            isValid = false;

        } else if (!isValidEmail(emailInput.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            emailInput.setAttribute("aria-invalid", "true");

            isValid = false;
        }


        // Subject
        if (subjectInput.value.trim() === "") {

            subjectError.textContent =
                "Please enter a subject.";

            subjectInput.setAttribute("aria-invalid", "true");

            isValid = false;
        }


        // Message
        if (messageInput.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            messageInput.setAttribute("aria-invalid", "true");

            isValid = false;
        }


        // Stop if invalid
        if (!isValid) {
            return;
        }
        
        successMessage.textContent =
            "Your message has been sent successfully!";
        contactForm.reset();
    });
}
