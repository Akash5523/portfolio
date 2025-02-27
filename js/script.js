document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links with offset for fixed header
  const navLinks = document.querySelectorAll(".nav-links a");
  const navbar = document.querySelector(".navbar");

  // Function to get the current header height (useful if it changes with viewport)
  function getHeaderHeight() {
    return navbar.offsetHeight;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && document.querySelector(targetId)) {
        const targetSection = document.querySelector(targetId);
        const targetPosition =
          targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - getHeaderHeight();
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll spy: add active class to nav links based on scroll position
  const sections = document.querySelectorAll("section");

  function setActiveLink() {
    const scrollPosition = window.scrollY + getHeaderHeight() + 10; // extra offset if needed
    let currentIndex = sections.length;

    while (--currentIndex && scrollPosition < sections[currentIndex].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[currentIndex].classList.add("active");
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // initialize on page load

  // Dark mode toggle
  const toggleSwitch = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load dark mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  });

  // Flip card effect
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });
  });

  // Typing animation in the Home section
  const typingElement = document.getElementById("typing-text");
  const phrases = [
    "Versatile Software Engineer",
    "Automation Expert",
    "Network Engineer",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 100; // delay between each character typing
  const erasingDelay = 50; // delay between each character erasing
  const newPhraseDelay = 2000; // delay before starting to erase the completed phrase

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, newPhraseDelay);
      } else {
        setTimeout(type, typingDelay);
      }
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(type, erasingDelay);
      }
    }
  }

  if (phrases.length) {
    setTimeout(type, newPhraseDelay);
  }
});
