document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.querySelector("button");
    var inputBox = document.getElementById("input-box");
    var listContainer = document.getElementById("list-container");

    addButton.addEventListener("click", addTask);

    function addTask() {
        var taskText = inputBox.value.trim(); // Trim whitespace from input text
        if (taskText !== "") {
            var listItem = document.createElement("li");
            listItem.textContent = taskText;
            listItem.addEventListener("click", toggleTask);
            listContainer.appendChild(listItem);
            inputBox.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    function toggleTask() {
        this.classList.toggle("completed");
    }
});
