const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
function addTask() {
    const taskText = newTaskInput.value;
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(newTask);
    };
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    newTaskInput.value = '';
}ddTaskButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});