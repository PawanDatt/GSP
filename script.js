// // This function will fetch the scheme data from the API
// async function fetchSchemes() {
//   try {
//     const response = await fetch("http://localhost:9091/api/schemes"); // API endpoint
//     if (!response.ok) throw new Error("Network response was not ok");

//     const schemes = await response.json(); // Parse the JSON response
//     return schemes; // Return the schemes data
//   } catch (error) {
//     console.error("Error fetching schemes:", error);
//     return []; // Return an empty array in case of an error
//   }
// }

// // This function will create HTML cards dynamically for each scheme and display them
// function displaySchemes(schemes) {
//   const container = document.getElementById("popular-schemes"); // Get the container where the cards will be displayed

//   container.innerHTML = ""; // Clear any existing content in the container before adding new cards

//   if (schemes.length === 0) {
//     container.innerHTML = "<p>No schemes found.</p>"; // Show a message if no schemes are available
//     return;
//   }

//   // Loop through each scheme and create a card for it
//   schemes.forEach((scheme) => {
//     const card = document.createElement("div"); // Create a new div element for the card
//     card.className = "scheme-card"; // Assign a class for styling (using your existing CSS class for cards)

//     // Set the inner HTML of the card with the scheme data
//     card.innerHTML = `
//       <h3>${scheme.schemeName || "Untitled Scheme"}</h3>  <!-- Scheme title -->
//       <p>${scheme.schemeDescription || "No description available."}</p>  <!-- Scheme description -->
//       <p><strong>Eligibility:</strong> ${scheme.eligibilityCriteria || "N/A"}</p>
//       <p><strong>Benefits:</strong> ${scheme.schemeBenefits || "N/A"}</p>
//       <a href="${scheme.applyLink || "#"}" class="apply-button" target="_blank">Apply Now</a> <!-- Apply link, open in a new tab, fallback to "#" if no link is provided -->
//     `;

//     container.appendChild(card); // Append the newly created card to the container
//   });
// }

// // On Page Load, fetch schemes and display them
// document.addEventListener("DOMContentLoaded", async () => {
//   const schemes = await fetchSchemes(); // Fetch schemes data asynchronously
//   displaySchemes(schemes); // Call displaySchemes function to render the fetched data on the page
// });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openAboutModal() {
  document.getElementById("aboutModal").style.display = "block";
}

function closeAboutModal() {
  document.getElementById("aboutModal").style.display = "none";
}

// Optional: Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("aboutModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
  }
  
  function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
  }
  
  // Optional: Close modal if clicked outside
  window.addEventListener('click', function (e) {
    const about = document.getElementById('aboutModal');
    const contact = document.getElementById('contactModal');
    if (e.target === about) about.style.display = 'none';
    if (e.target === contact) contact.style.display = 'none';
  });
  
