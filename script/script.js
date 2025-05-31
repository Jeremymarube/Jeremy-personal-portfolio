const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Stop form from submitting
      alert("Please fill in all fields.");
    }
  });
