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

    // Enviar con Web3Forms si todo está correcto!!!
    if (isValid) {
        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log("Web3Forms response:", data);

            if (response.ok && data.success) {
                // Mostrar mensaje de éxito
                formSuccess.classList.add("show");
                contactForm.reset();

                // Ocultar después de unos segundos
                setTimeout(() => {
                    formSuccess.classList.remove("show");
                }, 5000);
            } else {
                throw new Error(data.message || "Error sending message");
            }

        } catch (err) {
            console.error("Web3Forms submit error:", err);
            alert("There was a problem sending your message. Please try again later.");
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex para validar email: 
    //[^\s@]+ : uno o mas char que no sean whitespaces o @
    //^ : empieza con string
    // \. : punto
    // $: final
    return emailRegex.test(email);
}
