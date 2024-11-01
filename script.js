function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(newTask);
    taskInput.value = "";
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}
