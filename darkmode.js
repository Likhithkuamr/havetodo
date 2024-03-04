const mode = document.getElementById("mode");
const containerdark = document.getElementById("containerdark");
const folderdark = document.getElementById("folder");
const tododark = document.getElementById("to1");
const tododark2 = document.getElementById("to2");
const tododark3 = document.getElementById("to3");
const h21dark = document.getElementById("h21dark");
const h22dark = document.getElementById("h22dark");
const h23dark = document.getElementById("h23dark");
let isDarkMode = false;

// Check if dark mode preference is stored in local storage
if (localStorage.getItem("darkMode") === "true") {
  isDarkMode = true;
  enableDarkMode();
}

// Toggle dark mode
mode.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  // Store dark mode preference in local storage
  localStorage.setItem("darkMode", isDarkMode);
});

function enableDarkMode() {
  containerdark.classList.add("containerdark");
  folderdark.classList.add("folderdark");
  tododark.classList.add("to-dodark");
  tododark2.classList.add("to-dodark");
  tododark3.classList.add("to-dodark");
  h21dark.classList.add("h2dark");
  h22dark.classList.add("h2dark");
  h23dark.classList.add("h2dark");
};

function disableDarkMode() {
  containerdark.classList.remove("containerdark");
  folderdark.classList.remove("folderdark");
  tododark.classList.remove("to-dodark");
  tododark2.classList.remove("to-dodark");
  tododark3.classList.remove("to-dodark");
  h21dark.classList.remove("h2dark");
  h22dark.classList.remove("h2dark");
  h23dark.classList.remove("h2dark");
};