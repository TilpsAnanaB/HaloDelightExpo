document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  if (!hamburger || !navList) {
    console.error("Hamburger icon or navigation list not found.");
    return;
  }

  // Function to check if we're in mobile view
  const isMobile = () => window.innerWidth <= 768;

  // Toggle the mobile menu
  hamburger.addEventListener("click", () => {
    if (isMobile()) {
      navList.classList.toggle("active");
      console.log("Toggled mobile menu");
    }
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMobile()) {
        navList.classList.remove("active");
        console.log(`Closed menu after clicking ${link.textContent}`);
      }
    });
  });

  // Optional: Close navList if window is resized to desktop
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      navList.classList.remove("active");
    }
  });
});
