// Typing text content
const words = [
  "Software Developer",
  "Web Developer",
  "Backend Learner"
];

const wordElement = document.querySelector(".words");
let index = 0;

function changeWord() {
  wordElement.textContent = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeWord, 2000);

// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
}
