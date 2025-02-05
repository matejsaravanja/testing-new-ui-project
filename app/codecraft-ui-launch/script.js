// Confetti effect on page load
document.addEventListener("DOMContentLoaded", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

// Handle "Try it now!" button click
function handleTryNow() {
  alert("🚀 Let’s get started with the new Codecraft UI!");
  confetti({
    particleCount: 200,
    spread: 160,
    origin: { y: 0.6 },
  });
}