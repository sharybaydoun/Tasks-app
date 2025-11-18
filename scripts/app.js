// -----------------------
// NAVIGATION
// -----------------------
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function showSection(sectionName) {
  // Hide all sections
  sections.forEach(sec => sec.classList.add('hidden'));
  
  // Show the selected section
  const target = document.querySelector(`.${sectionName}-section`);
  if (target) target.classList.remove('hidden');
}

// Add click listeners to nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// -----------------------
// TASK FORM SHOW/HIDE
// -----------------------
const showTaskFormBtn = document.querySelector('.show-task-form-btn');
const taskForm = document.querySelector('.task-form');
const cancelTaskBtn = document.querySelector('.cancel-task-btn');

// Show the form when "Add Task" is clicked
showTaskFormBtn.addEventListener('click', () => {
  taskForm.classList.remove('hidden');
});

// Hide the form when "Cancel" is clicked
cancelTaskBtn.addEventListener('click', () => {
  taskForm.classList.add('hidden');
});

