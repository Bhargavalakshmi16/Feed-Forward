let loggedInRole = "";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let domain = document.getElementById("domain").value;
      let email = document.getElementById("email").value;
      loggedInRole = domain;

      localStorage.setItem("loggedInRole", loggedInRole);
      localStorage.setItem("email", email);

      window.location.href = "landing.html";
    });
  }

  const homeMessage = document.getElementById("home-message");
  const subPages = document.getElementById("sub-pages");

  if (homeMessage && subPages) {
    let domain = localStorage.getItem("loggedInRole");
    let email = localStorage.getItem("email");

    let message = "";
    let subPagesHTML = "";

    if (domain === "Donor") {
      message = `Hello ${email}, thank you for being a generous Donor!`;
      subPagesHTML = `
        <a href="#" class="protected">View Donation Requests</a>
        <a href="#" class="protected">My Donations</a>
        <a href="#" class="protected">Donate Now</a>
      `;
    } 
    else if (domain === "Volunteer") {
      message = `Hello ${email}, welcome Volunteer! You can register below.`;
      subPagesHTML = `
        <a href="volunteer-register.html">Register as Volunteer</a>
        <a href="#" class="protected">Upcoming Volunteer Events</a>
        <a href="#" class="protected">My Volunteer History</a>
        <a href="#" class="protected">Sign Up for Event</a>
      `;
    } 
    else {
      message = `Hello ${email}, welcome to FeedForward!`;
      subPagesHTML = `
        <a href="#" class="protected">Browse Donations</a>
        <a href="#" class="protected">Volunteer Opportunities</a>
        <a href="#" class="protected">Contact Us</a>
      `;
    }

    homeMessage.textContent = message;
    subPages.innerHTML = subPagesHTML;

    document.querySelectorAll(".protected").forEach(link => {
      link.addEventListener("click", function(e) {
        if (loggedInRole === "Volunteer") {
          let pin = prompt("Enter Volunteer Security PIN:");
          if (pin !== "1234") {
            e.preventDefault();
            alert("Invalid PIN. Access denied.");
          }
        }
      });
    });
  }
});
