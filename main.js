// Assuming there are elements with IDs "input-box" and "list-container" in your HTML file
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
  if (inputBox.value === "") {
    showCustomAlert("Please enter a task name");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; // Unicode for the '×' symbol
    li.appendChild(span);

    inputBox.value = ""; // Clear input after adding the task
    saveData(); // Save data to localStorage
  }
}
// Function to show the custom alert
function showCustomAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").style.display = "block";

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("custom-alert").style.display = "none";
  });
}
// Event listener for marking tasks as checked or deleting tasks
listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentNode.remove();
      saveData();
    }
  },
  false
);

// Function to save data to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load saved data on page load
function loadData() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Load data when the page loads
loadData();

window.onload = function () {
  document.getElementById("input-box").focus();
};

// Function to show the custom alert
function showCustomAlert(message) {
  const alertBox = document.getElementById("custom-alert");
  const closeBtn = document.getElementById("close-btn");

  document.getElementById("alert-message").innerText = message;
  alertBox.style.display = "block";

  // Block interactions with the rest of the page
  document.body.classList.add("blocked");

  // Close the alert and unblock the page
  closeBtn.addEventListener("click", function () {
    alertBox.style.display = "none";
    document.body.classList.remove("blocked");
  });
}

// function toggleDarkMode() {
//   document.body.classList.toggle("dark-mode");

//   const modeIcon = document.getElementById("dark-mode-toggle");
//   if (document.body.classList.contains("dark-mode")) {
//     modeIcon.textContent = "☀️";
//   } else {
//     modeIcon.textContent = "🌙";
//   }
// }
