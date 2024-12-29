// Autofill today’s date
document.getElementById("todayDate").value = new Date().toLocaleDateString();

// Form submission handling
document.getElementById("job-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Fetch input values
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const todayDate = document.getElementById("todayDate").value;

  const Day = document.getElementById("Day").value.padStart(2, '0'); // Ensure 2 digits
  const Month = document.getElementById("Month").value.padStart(2, '0'); // Ensure 2 digits
  const Year = document.getElementById("Year").value;

  const DateOfBirth = `${Day}-${Month}-${Year}`;
  const address = document.getElementById("address").value.trim();
  const qualification = document.getElementById("qualification").value.trim();
  const experience = document.getElementById("Experience").value.trim();
  const jobPosition = document.getElementById("job-position").value;

  // Create WhatsApp message
  const whatsappMessage = `
*Job Application Form Submission*
\n*Name:* ${name}
\n*Mobile:* ${mobile}
\n*Email:* ${email}
\n*Today’s Date:* ${todayDate}
\n*Date Of Birth:* ${DateOfBirth}
\n*Address:* ${address}
\n*Qualification:* ${qualification}
\n*Experience:* ${experience} years
\n*Job Position:* ${jobPosition}
`;

  // WhatsApp API link
  const phoneNumber = "7054033320"; // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Redirect user to WhatsApp
  window.open(whatsappURL, "_blank");
});