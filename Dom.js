document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mode");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
});
