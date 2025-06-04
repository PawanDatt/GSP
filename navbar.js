document.addEventListener("DOMContentLoaded", () => {
  // Get the toggle button and the navigation links container
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Ensure elements exist before attaching event listeners
  if (toggleBtn && navLinks) {
    // Event listener for the toggle button to show/hide the navigation menu
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show"); // Toggle the 'show' class to display/hide the menu
    });

    // Close the menu when a navigation link is clicked (optional for better UX on mobile)
    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("show"); // Remove the 'show' class to hide the menu
      });
    });
  }
});
