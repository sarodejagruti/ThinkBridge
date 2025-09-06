

function showSection(sectionId, btn = null) {
  // Hide all sections
  document.querySelectorAll("section.content").forEach(sec => {
    sec.classList.add("hidden");
    sec.classList.remove("fade-in");
  });

  // Show target section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("fade-in");
    target.scrollIntoView({ behavior: "smooth" });
  }

  // Reset nav buttons
  const navButtons = document.querySelectorAll("nav button");
  navButtons.forEach(b => b.classList.remove("active"));

  // Highlight clicked nav button if provided
  if (btn) {
    btn.classList.add("active");
  }
}
