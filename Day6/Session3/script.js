function showSection(sectionId, btn) {
  // Hide all sections
  const sections = document.querySelectorAll(".content");
  sections.forEach(sec => {
    sec.classList.add("hidden");
    sec.classList.remove("fade-in");
  });

  // Show selected section with fade-in
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.remove("hidden");
  activeSection.classList.add("fade-in");

  // Reset all buttons
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach(b => b.classList.remove("active"));

  // Highlight the clicked button
  if (btn) {
    btn.classList.add("active");
  }
}
