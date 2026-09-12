const loggedIn = localStorage.getItem("loggedIn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (loggedIn === null) {
    window.location.href = "index.html";
}

const taskList = document.getElementById("taskList");
const taskNameInput = document.getElementById("taskName");
const createTaskBtn = document.getElementById("createTask");

function renderTasks() {

    taskList.innerHTML = "";
    if (tasks.length >= 1) {
        for (let task of tasks) {
            let singleTask = document.createElement("div");

            let taskName = document.createElement("p");
            taskName.innerText = task.name;

            let deleteTask = document.createElement("button");
            deleteTask.setAttribute("data-task-id", task.id);
            deleteTask.innerText = "Delete Task";

            deleteTask.addEventListener("click", () => {
                tasks = tasks.filter(function (item) {
                    return item.id !== task.id;
                });

                localStorage.setItem("tasks", JSON.stringify(tasks));

                renderTasks();
            });

            singleTask.append(taskName, deleteTask);
            taskList.append(singleTask);
        }
    }
}
renderTasks();

createTaskBtn.addEventListener("click", () => {

    const taskName = taskNameInput.value.trim();

    if (taskName === "") {
        return alert("Please enter a task.");
    }

    const dateTime = new Date();
    const id = dateTime.getTime();

    tasks.push({
        id: id,
        name: taskName,
    });

    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonTasks);
    renderTasks();
});