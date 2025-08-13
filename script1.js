// script1.js
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const loginForm = document.getElementById("loginForm");
  const loginSection = document.getElementById("login-section");
  const rolePage = document.getElementById("role-page");
  const roleTitle = document.getElementById("role-title");
  const roleMessage = document.getElementById("role-message");

  // Helper: safe text insertion
  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"']/g, function (m) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[m];
    });
  }

  // Ensure required elements exist
  if (!loginForm || !loginSection || !rolePage || !roleTitle || !roleMessage) {
    // If something is missing, stop and optionally log to console for debugging
    console.warn("Required HTML elements not found. Check IDs: loginForm, login-section, role-page, role-title, role-message.");
    return;
  }

  // Hide role page initially (in case CSS doesn't)
  rolePage.style.display = "none";

  // Handle login form submit
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const domainSelect = document.getElementById("domain");

    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";
    const domain = domainSelect ? domainSelect.value : "";

    if (!email || !password || !domain) {
      alert("Please fill all fields and select your role.");
      return;
    }

    // Optional: store login info (change keys if you like)
    localStorage.setItem("ff_email", email);
    localStorage.setItem("ff_role", domain);

    // Hide login section and show the role page
    loginSection.style.display = "none";

    // Center role page content (inline styles so you don't need CSS changes)
    rolePage.style.display = "flex";
    rolePage.style.flexDirection = "column";
    rolePage.style.alignItems = "center";
    rolePage.style.justifyContent = "center";
    rolePage.style.minHeight = "60vh";
    rolePage.style.textAlign = "center";
    rolePage.style.padding = "20px";

    // Populate role-specific content
    const safeEmail = escapeHtml(email);

    if (domain === "Donor") {
      roleTitle.textContent = "Donor Dashboard";
      roleMessage.innerHTML = `Hello <strong>${safeEmail}</strong>, thank you for being a generous Donor!`;
    } else if (domain === "Volunteer") {
      roleTitle.textContent = "Volunteer Dashboard";
      roleMessage.innerHTML = `Hello <strong>${safeEmail}</strong>, welcome Volunteer! You can register below.`;
      // if you want, add links/buttons here dynamically (example:)
      // roleMessage.innerHTML += '<br><a href="volunteer-register.html">Register as Volunteer</a>';
    } else if (domain === "Admin") {
      roleTitle.textContent = "Admin Panel";
      roleMessage.innerHTML = `Hello <strong>${safeEmail}</strong>, you can manage users and monitor donations.`;
    } else {
      roleTitle.textContent = "Welcome";
      roleMessage.innerHTML = `Hello <strong>${safeEmail}</strong>, welcome to FeedForward!`;
    }
  });
});
