async function fetchSchemes() {
  try {
    const response = await fetch("http://localhost:8080/api/schemes");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const schemes = await response.json();
    return schemes;
  } catch (error) {
    console.error("Error fetching schemes:", error);
    return [];
  }
}
