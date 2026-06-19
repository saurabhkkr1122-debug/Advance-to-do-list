let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask() {
    const text = document.getElementById("taskInput").value;
    const date = document.getElementById("dueDate").value;
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;

    if (text.trim() === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text,
        date,
        category,
        priority,
        completed: false
    });

    saveTasks();
    renderTasks();

    document.getElementById("taskInput").value = "";
    
    document.getElementById("dueDate").value = "";


}

function renderTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.className = `task ${task.priority.toLowerCase()}`;

        // Drag & Drop Support
        li.draggable = true;

        li.addEventListener("dragstart", () => {
            li.classList.add("dragging");
        });

        li.addEventListener("dragend", () => {
            li.classList.remove("dragging");
        });

        li.innerHTML = `
            <div>
                <h3 class="${task.completed ? "completed" : ""}">
                    ${task.text}
                </h3>

                <p>📅 ${task.date || "No Due Date"}</p>
                <p>🏷️ ${task.category}</p>
                <p>⚡ ${task.priority}</p>
            </div>

            <div class="actions">
                <button onclick="toggleTask(${index})">
                    ${task.completed ? "Undo" : "Done"}
                </button>

                <button onclick="editTask(${index})">
                    Edit
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });

    updateStats();
    updateProgress();

    if(
    typeof createChart ===
    "function"
    ) {
    createChart();
    }

}
    

    


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function editTask(index) {
    const newTask = prompt(
        "Edit Task",
        tasks[index].text
    );

    if (newTask && newTask.trim() !== "") {
        tasks[index].text = newTask;

        saveTasks();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);

        saveTasks();
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function updateStats() {
    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;

    document.getElementById("totalTasks").innerText = total;
    document.getElementById("completedTasks").innerText = completed;
    document.getElementById("pendingTasks").innerText = pending;
}

function updateProgress() {
    const completed = tasks.filter(
        task => task.completed
    ).length;

    const percentage =
        tasks.length === 0
            ? 0
            : (completed / tasks.length) * 100;

    document.getElementById("progress").style.width =
        percentage + "%";
}

function searchTask() {
    let value = document
        .getElementById("search")
        .value
        .toLowerCase();

    document
        .querySelectorAll(".task")
        .forEach(task => {
            task.style.display =
                task.innerText
                    .toLowerCase()
                    .includes(value)
                    ? "flex"
                    : "none";
        });
}


function filterTasks(type) {

    const taskElements =
        document.querySelectorAll(".task");

    taskElements.forEach((taskElement, index) => {

        const task = tasks[index];

        if (type === "all") {

            taskElement.style.display = "flex";

        } else if (type === "completed") {

            taskElement.style.display =
                task.completed ? "flex" : "none";

        } else if (type === "pending") {

            taskElement.style.display =
                !task.completed ? "flex" : "none";
        }

    });

}

// Make functions available globally
window.addTask = addTask;
window.toggleTask = toggleTask;
window.editTask = editTask;
window.deleteTask = deleteTask;
window.searchTask = searchTask;
window.filterTasks = filterTasks;

