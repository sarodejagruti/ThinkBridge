function showSection(sectionId, btn) {
  // Hide all section.content
  const sections = document.querySelectorAll("section.content");
  sections.forEach(sec => {
    sec.classList.add("hidden");
    sec.classList.remove("fade-in");
  });

  // Show selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.remove("hidden");
    activeSection.classList.add("fade-in");
  }

  // Reset all nav buttons
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach(b => b.classList.remove("active"));

  // Highlight clicked button
  if (btn) btn.classList.add("active");
}
