const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("icon");

function setDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  icon.textContent = enabled ? "☀️" : "🌙";
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

const darkModeOn = localStorage.getItem("darkMode") === "enabled";
setDarkMode(darkModeOn);

toggle.addEventListener("click", () => {
  setDarkMode(!document.body.classList.contains("dark-mode"));
});
