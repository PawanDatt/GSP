// Utility function to validate email format using regex
function isValidEmail(email) {
  // Basic pattern: something@something.something
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Utility function to validate a 10-digit phone number
function isValidPhone(phone) {
  return /^[0-9]{10}$/.test(phone); // Must be exactly 10 digits, numeric only
}

// Shared validation logic for both login and signup (email & password)
function validateEmailPassword(email, password) {
  // Check if any field is empty
  if (!email || !password) {
    alert("Please fill all fields.");
    return false;
  }

  // Check for valid email format
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password should be at least 6 characters
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  return true; // Passed all checks
}

// Handle signup form validation
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.onsubmit = function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form input values
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const phone = document.getElementById("signup-phone").value.trim();

    // Check for empty fields
    if (!name || !email || !password || !phone) {
      alert("Please fill all fields.");
      return;
    }

    // Validate email
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number
    if (!isValidPhone(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // All validations passed
    alert("Signup successful");
    
    // signupForm.submit(); // Uncomment this when integrating with backend

    signupForm.reset(); // Clear the form after successful validation
  };
}

// Handle login form validation
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.onsubmit = function (e) {
    e.preventDefault(); // Prevent default form action

    // Get login form values
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    // Use shared email-password validation
    if (validateEmailPassword(email, password)) {
      alert("Login successful");

      // loginForm.submit(); // Uncomment when backend login is ready
    }
  };
}
