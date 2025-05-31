document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from actually submitting (for now)
    alert("Thank you for your message! I will get back to you soon.");
    form.reset(); // Clear the form inputs
  });
});
