const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const heroSection = document.getElementById("hero");
const whatsappButton = document.getElementById("whatsapp-button");

const languageBtn = document.getElementById("language-btn");
const languageMenu = document.getElementById("language-menu");
const currentLanguage = document.getElementById("current-language");
const languageOptions = document.querySelectorAll(".language-option");

// Mobile navbar toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Language dropdown toggle
if (languageBtn && languageMenu) {
  languageBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    languageMenu.classList.toggle("show");
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedLanguage = option.getAttribute("data-lang");
      if (currentLanguage) {
        currentLanguage.textContent = selectedLanguage;
      }
      languageMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageBtn.contains(event.target) && !languageMenu.contains(event.target)) {
      languageMenu.classList.remove("show");
    }
  });
}

// Show floating WhatsApp button after hero section is out of view
if (heroSection && whatsappButton) {
  window.addEventListener("scroll", () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (window.scrollY > heroBottom - 100) {
      whatsappButton.classList.add("show");
    } else {
      whatsappButton.classList.remove("show");
    }
  });
}