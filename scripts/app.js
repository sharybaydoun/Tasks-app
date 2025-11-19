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
// -----------------------
// TASK ADDING
// -----------------------
const taskInput = document.querySelector('.task-text');
const taskList = document.querySelector('.task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") return;

  // Create task card
  const li = document.createElement('li');
  li.classList.add('task-item', 'not-done'); // default not done

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create text span
  const span = document.createElement('span');
  span.textContent = text;

  // Add checkbox + text to the task card
  li.appendChild(checkbox);
  li.appendChild(span);

  // Append task card to the task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Hide the form after adding (optional)
  taskForm.classList.add('hidden');
});

// -----------------------
// TASK ADDING
// -----------------------
const taskInput = document.querySelector('.task-text');
const taskList = document.querySelector('.task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") return;

  // Create task card
  const li = document.createElement('li');
  li.classList.add('task-item', 'not-done'); // default not done

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create text span
  const span = document.createElement('span');
  span.textContent = text;

  // Add checkbox + text to the task card
  li.appendChild(checkbox);
  li.appendChild(span);

  // Append task card to the task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Hide the form after adding (optional)
  taskForm.classList.add('hidden');
});
// -----------------------
// TOGGLE DONE/NOT-DONE
// -----------------------
taskList.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const li = e.target.closest('li');
    if (e.target.checked) {
      li.classList.remove('not-done');
      li.classList.add('done');
    } else {
      li.classList.remove('done');
      li.classList.add('not-done');
    }
  }
});




