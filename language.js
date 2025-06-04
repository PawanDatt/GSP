// ===============================
// Language Section
// ===============================

// Default language is English ("en")
let language = "en";

// Function to toggle between English ("en") and Hindi ("hi")
function toggleLanguage() {
  language = language === "en" ? "hi" : "en"; // Switch the language
  updateText(); // Update all elements with new language text
}

// Function to update the text content of all elements marked with data-lang attribute
function updateText() {
  // Select all elements that have a data-lang attribute
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-lang"); // Get the translation key
    const translatedText = getText(key, language); // Get translated text for the selected language

    // For input fields, change the placeholder text
    if (element.tagName == "INPUT" && element.placeholder !== undefined) {
      element.placeholder = translatedText;
    } else {
      // For other elements (div, span, p, etc.), set the inner HTML
      element.innerHTML = translatedText;
    }
  });
}

// Function to fetch translated text based on key and selected language
function getText(key, lang) {
  // Translation dictionary with English and Hindi values
  const text = {
    "toggle-lang": {
      en: "English",
      hi: "Hindi",
    },
    "hero-heading": {
      en: "Find the Government Schemes That Empower You",
      hi: "उन सरकारी योजनाओं को पाएं जो आपको सशक्त बनाती हैं",
    },
    "popular-schemes-heading": {
      en: "Popular Schemes",
      hi: "लोकप्रिय योजनाएं",
    },
    "search-placeholder": {
      en: "Search for Schemes..",
      hi: "योजनाओं की खोज करें..",
    },
    "explore-schemes": {
      en: "Explore Schemes",
      hi: "योजनाओं का अन्वेषण करें",
    },
    "scheme-1": {
      en: "Scheme 1",
      hi: "योजना 1",
    },
    "scheme-2": {
      en: "Scheme 2",
      hi: "योजना 2",
    },
    "scheme-3": {
      en: "Scheme 3",
      hi: "योजना 3",
    },
    privacy: {
      en: "Privacy",
      hi: "गोपनीयता",
    },
    terms: {
      en: "Terms",
      hi: "नियम और शर्तें",
    },
    instagram: {
      en: "Instagram",
      hi: "इंस्टाग्राम",
    },
    twitter: {
      en: "Twitter",
      hi: "ट्विटर",
    },
    linkedin: {
      en: "LinkedIn",
      hi: "लिंक्डइन",
    },
    home: {
      en: "Home",
      hi: "होम",
    },
    contact: {
      en: "Contact",
      hi: "संपर्क",
    },
    about: {
      en: "About",
      hi: "हमारे बारे में",
    },
    schemes: {
      en: "Schemes",
      hi: "योजनाएं",
    },
    "login-signup": {
      en: "Login/Sign Up",
      hi: "लॉगिन/साइन अप",
    },
    "welcome-back": {
      en: "Welcome Back",
      hi: "स्वागत है",
    },
    "sign-up": {
      en: "Sign Up",
      hi: "साइन अप",
    },
    "sign-up-question": {
      en: "Don't have an account? <a href='Signup.html'>Sign Up</a>",
      hi: "क्या आपका खाता नहीं है? <a href='Signup.html'>साइन अप करें</a>",
    },
    "login-question": {
      en: "Already have an account? <a href='login.html'>Log In</a>",
      hi: "क्या आपका खाता है? <a href='login.html'>लॉग इन करें</a>",
    },
    "login-link": {
      en: "Log In",
      hi: "लॉग इन",
    },
  };

  // If the key doesn't exist in the dictionary, log a warning and return the key as fallback
  if (!text[key]) {
    console.warn(`Missing Translation for key: ${key}`);
    return key;
  }

  // Return the translated text based on language
  return text[key][lang] || text[key].en; // Fallback to English if the selected language translation is missing
}
