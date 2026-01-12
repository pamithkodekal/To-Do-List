function Todos() {
    let input = document.getElementById("Todo");
    let text = input.value.trim();

    if (text === "") {
        showAlert("ENTER A MISSION, COMMANDO");
        return;
    }

    addTask(text);
    input.value = "";
}

function addTask(todo) {
    let taskList = document.getElementById("taskList");

    let task = document.createElement("div");
    task.className = "Task";

    task.innerHTML = `
        <input type="checkbox">
        <span>${todo}</span>
        <button class="update-btn" onclick="updateTask(this)">EDIT</button>
    `;

    taskList.appendChild(task);
}

function updateTask(button) {
    let task = button.parentElement;
    let textSpan = task.querySelector("span");

    let newText = prompt("Update mission:", textSpan.innerText);

    if (newText !== null && newText.trim() !== "") {
        textSpan.innerText = newText;
    }
}

/* CUSTOM ALERT */
function showAlert(message) {
    document.getElementById("alertMessage").innerText = message;
    document.getElementById("alertBox").style.display = "flex";
}

function closeAlert() {
    document.getElementById("alertBox").style.display = "none";
}
