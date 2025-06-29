
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  li.onclick = () => li.classList.toggle('completed');

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
