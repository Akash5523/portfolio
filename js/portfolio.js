document.addEventListener("DOMContentLoaded", () => {
    // When a nav link is clicked, show the corresponding section and hide others.
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-section');
        
        // Remove 'active' class from all sections
        sections.forEach(section => section.classList.remove('active'));
        
        // Add 'active' class to the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
          // Scroll to the top of the section smoothly
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Load dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
      toggleSwitch.checked = true;
    }
  
    // Toggle Dark Mode
    toggleSwitch.addEventListener("change", () => {
      if (toggleSwitch.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  });
  
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });
  });
  