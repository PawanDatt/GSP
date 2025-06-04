let allSchemes = [];

window.onload = async function () {
  try {
    const response = await fetch("http://localhost:8080/api/schemes");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log("Raw response from API:", data);

    allSchemes = data;
    displaySchemes(allSchemes);
    setupFilter(allSchemes);
  } catch (error) {
    console.error("Error fetching schemes:", error);
    alert("Failed to load schemes.");
  }

  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.onsubmit = function (e) {
      e.preventDefault();
      const searchQuery = document.getElementById("searchInput").value.trim();
      if (searchQuery !== "") {
        filterBySearch(searchQuery);
      } else {
        alert("Please enter a scheme name to search.");
      }
    };
  }
};
function displaySchemes(schemes) {
  const container =
    document.getElementById("schemesContainer") ||
    document.querySelector(".popular-schemes");
  if (!container) {
    console.error("Schemes container not found!");
    return;
  }

  container.innerHTML = "";

  if (schemes.length === 0) {
    container.innerHTML = "<p>No schemes found.</p>";
    return;
  }

  schemes.forEach((scheme) => {
    console.log("Rendering Scheme:", scheme);

    const card = document.createElement("div");
    card.className = "scheme-card";

    const name = scheme.name?.trim() || "Untitled Scheme";
    const description = scheme.description?.trim() || "No description available.";
    const eligibility = scheme.eligibility?.trim() || "N/A";
    
    // 🟢 This is your custom message logic
    let applicationText = "";
    if (scheme.applicationProcess && scheme.applicationProcess.trim() !== "") {
      applicationText = scheme.applicationProcess;
    } else {
      applicationText = "Click the below button to go to the main website.";
    }

    // ✅ Assume this is a new field from backend, like applyLink
    const applyLink = scheme.applyLink?.trim() || "#";

    card.innerHTML = `
      <h3>${name}</h3>
      <p>${description}</p>
      <p><strong>Eligibility:</strong> ${eligibility}</p>
      <p><strong>How to Apply:</strong> ${applicationText}</p>
      <a href="${applyLink}" class="apply-button" target="_blank">Apply Now</a>
    `;

    container.appendChild(card);
  });
}


function setupFilter(schemes) {
  const filter = document.getElementById("categoryFilter");
  if (!filter) return;

  const categories = Array.from(
    new Set(schemes.map((s) => s.category).filter(Boolean))
  );

  filter.innerHTML = `<option value="all">All</option>`;
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filter.appendChild(option);
  });

  filter.addEventListener("change", function () {
    const selected = this.value;
    const filtered =
      selected === "all"
        ? allSchemes
        : allSchemes.filter((s) => s.category === selected);
    displaySchemes(filtered);
  });
}

function filterBySearch(query) {
  const filtered = allSchemes.filter(
    (scheme) =>
      scheme.name?.toLowerCase().includes(query.toLowerCase()) ||
      scheme.description?.toLowerCase().includes(query.toLowerCase())
  );
  displaySchemes(filtered);
}
