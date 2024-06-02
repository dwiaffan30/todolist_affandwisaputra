document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function (task) {
        addTaskToList(task);
    });

    window.addTask = function () {
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTaskToList(taskText);
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
        }
    };

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            var li = event.target.parentElement;
            var taskText = li.textContent;
            var index = tasks.indexOf(taskText);
            if (index !== -1) {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
            li.remove();
        }
    });

    function addTaskToList(taskText) {
        var li = document.createElement("li");
        li.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});