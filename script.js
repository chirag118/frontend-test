document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
  // Example interactive feature
  const header = document.querySelector("header");
  header.addEventListener("click", () => {
    alert("You clicked the header!");
  });
});
