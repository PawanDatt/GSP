// Ensure the DOM is fully loaded before accessing the button element
document.addEventListener('DOMContentLoaded', function () {
  // Get the button element for scrolling to top
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Monitor the window scroll event
  window.addEventListener('scroll', function () {
    // Check if the page has been scrolled more than 100px from the top
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      scrollBtn.style.display = "block"; // If scrolled down, show the button
    } else {
      scrollBtn.style.display = "none"; // If scrolled up, hide the button
    }
  });

  // Add an event listener to the button to scroll to the top when clicked
  scrollBtn.addEventListener('click', function () {
    // Use smooth scrolling to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
