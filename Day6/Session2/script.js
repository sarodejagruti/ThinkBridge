function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content");
  sections.forEach(sec => sec.classList.add("hidden"));

  // Show selected section
  document.getElementById(sectionId).classList.remove("hidden");

  // Reset all buttons
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Highlight the clicked button
  event.target.classList.add("active");
}
