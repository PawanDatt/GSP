// Initialize the scroll position to 0
let scrollAmount = 0;

// Select the carousel container
const carousel = document.querySelector(".carousel");

// Select the cards within the carousel
const cards = document.querySelectorAll(".scheme-card");

// Calculate the width of one card including the margin/gap (e.g., 16px)
const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight, 10);

// Get the total scrollable width of the carousel
const totalWidth = carousel.scrollWidth;

// Add event listener for the "Next" button
document.querySelector(".next").addEventListener("click", () => {
  // Check if there's still content to scroll on the right
  if (scrollAmount + cardWidth < totalWidth) {
    // Increment scroll amount by one card's width
    scrollAmount += cardWidth;

    // Smoothly scroll the carousel to the new position
    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
});

// Add event listener for the "Previous" button
document.querySelector(".prev").addEventListener("click", () => {
  // Decrease scroll amount by one card's width
  scrollAmount -= cardWidth;

  // Ensure scrollAmount doesn't go below zero (start of carousel)
  if (scrollAmount < 0) scrollAmount = 0;

  // Smoothly scroll the carousel back to the new position
  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});
