// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Animate hamburger
  const spans = hamburger.querySelectorAll("span")
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const spans = hamburger.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)"
  }

  lastScroll = currentScroll
})

// Form validation and submission
const contactForm = document.getElementById("contactForm")
const formSuccess = document.getElementById("formSuccess")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Clear previous errors
  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("error")
    group.querySelector(".error-message").textContent = ""
  })

  // Get form values
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  let isValid = true

  // Validate name
  if (name === "") {
    showError("name", "Name is required")
    isValid = false
  } else if (name.length < 2) {
    showError("name", "Name must be at least 2 characters")
    isValid = false
  }

  // Validate email
  if (email === "") {
    showError("email", "Email is required")
    isValid = false
  } else if (!isValidEmail(email)) {
    showError("email", "Please enter a valid email address")
    isValid = false
  }

  // Validate message
  if (message === "") {
    showError("message", "Message is required")
    isValid = false
  } else if (message.length < 10) {
    showError("message", "Message must be at least 10 characters")
    isValid = false
  }

  // If form is valid, show success message
  if (isValid) {
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message })

    // Show success message with animation
    formSuccess.classList.add("show")

    // Reset form
    contactForm.reset()

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.classList.remove("show")
    }, 5000)
  }
})

// Helper function to show error
function showError(fieldId, message) {
  const field = document.getElementById(fieldId)
  const formGroup = field.closest(".form-group")
  const errorMessage = formGroup.querySelector(".error-message")

  formGroup.classList.add("error")
  errorMessage.textContent = message
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".skill-category, .project-card, .contact-info, .contact-form-wrapper",
  )

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add active state to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const scrollPosition = window.pageYOffset + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
})
