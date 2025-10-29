const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Limpiar errores anteriores
    document.querySelectorAll(".form-group").forEach((group) => {
        group.classList.remove("error");
        group.querySelector(".error-message").textContent = "";
    });

    // Obtener valores
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Validar nombre
    if (name === "") {
        showError("name", "Name is required");
        isValid = false;
    } else if (name.length < 2) {
        showError("name", "Name must be at least 2 characters");
        isValid = false;
    }

    // Validar email
    if (email === "") {
        showError("email", "Email is required");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email address");
        isValid = false;
    }

    // Validar mensaje
    if (message === "") {
        showError("message", "Message is required");
        isValid = false;
    } else if (message.length < 10) {
        showError("message", "Message must be at least 10 characters");
        isValid = false;
    }

    // Si todo está correcto, enviamos con FormSubmit
    if (isValid) {
        const ajaxUrl = contactForm.action.replace(
            "https://formsubmit.co/",
            "https://formsubmit.co/ajax/"
        );

        try {
            const response = await fetch(ajaxUrl, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(contactForm),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("✅ FormSubmit response:", data);

            // Mostrar mensaje de éxito
            formSuccess.classList.add("show");
            contactForm.reset();

            // Ocultar mensaje de éxito después de unos segundos
            setTimeout(() => {
                formSuccess.classList.remove("show");
            }, 5000);
        } catch (err) {
            console.error("❌ Form submit error:", err);
            alert(
                "There was a problem sending your message. Please try again later or use the direct email link."
            );
        }
    }
});

// Función para mostrar errores
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest(".form-group");
    const errorMessage = formGroup.querySelector(".error-message");

    formGroup.classList.add("error");
    errorMessage.textContent = message;
}

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}