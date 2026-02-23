const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track attendance
let count = 0;
const maxCount = 50;

// handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // Increment count
  count++;
  console.log("Total check-ins: ", count);

  // Update Progress Bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log("Progress: ", percentage);

  const attendanceBar = document.getElementById("attendanceBar");
  progressBar.style.width = percentage;
  progressBar.textContent = percentage;
  document.getElementById("attendeeCount").textContent = count;

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // SHow welcome message
  const message = `🎉 Welcome, ${name} from ${teamName}!`;
  const messageBox = document.getElementById("welcomeMessage");
  messageBox.textContent = message;

  form.reset();
});
