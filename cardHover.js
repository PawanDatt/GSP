// Select all elements with the class 'scheme-card' and store them in the 'cards' NodeList
const cards = document.querySelectorAll(".scheme-card");

// Loop through each card and add event listeners for mouseover and mouseout events
cards.forEach((card) => {
  const originalBackgroundColor = getComputedStyle(card).backgroundColor;

  card.addEventListener("mouseover", () => {
    card.style.backgroundColor = "#1a1a1a";
  });

  card.addEventListener("mouseout", () => {
    card.style.backgroundColor = originalBackgroundColor;
  });
});
