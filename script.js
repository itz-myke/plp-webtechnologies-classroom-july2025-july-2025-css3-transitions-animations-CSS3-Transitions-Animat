// Part 2: JavaScript Functions

// Function with parameter + return value
function squareNumber(num) {
  return num * num;
}

// Demonstrating scope
let globalMessage = "I am global!";

function demonstrateScope() {
  let localMessage = "I am local!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Only accessible here
}

// Trigger calculation
document.getElementById("calcBtn").addEventListener("click", () => {
  let result = squareNumber(5); // calling function with parameter
  document.getElementById("calcResult").textContent = `Square of 5 is: ${result}`;
  demonstrateScope();
});

// Part 3: Combine CSS + JS
const box = document.querySelector(".box");
document.getElementById("animateBtn").addEventListener("click", () => {
  box.classList.toggle("animate"); // add/remove animation class
});

// Modal logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 10); // trigger CSS transition
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 500); // wait for transition
});
