
window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const task = { text: taskText, completed: false };
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  input.value = '';
  renderTasks();
}

function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.onclick = () => toggleComplete(index);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeTask(index);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

function toggleComplete(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks();
}

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

function loadTasks() {
  renderTasks();
}
