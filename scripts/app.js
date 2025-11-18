// Select sections and nav links
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to show one section
function showSection(sectionName) {
  sections.forEach(sec => sec.classList.add('hidden')); // hide all
  const target = document.querySelector('.' + sectionName + '-section');
  if (target) target.classList.remove('hidden'); // show target
}

// Attach click listeners to nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    showSection(link.dataset.section);
  });
});