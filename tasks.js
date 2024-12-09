document.addEventListener("DOMContentLoaded", () => {
  // Query for submit button and input task field
  const submit = document.getElementById("submit");
  const newTask = document.getElementById("task");
  const tasksList = document.getElementById("tasks");

  // Disable submit button by default
  submit.disabled = true;

  // Listen for input in the task field
  newTask.addEventListener("input", () => {
    // Enable submit button only if there's text in the input
    submit.disabled = newTask.value.trim() === "";
  });

  // Listen for form submission
  document.querySelector("form").addEventListener("submit", (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Get the task text
    const taskText = newTask.value.trim();

    if (taskText) {
      // Create list item for the new task
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      // Add new element to unordered list
      tasksList.append(listItem);

      // Clear input field
      newTask.value = "";

      // Disable submit button again
      submit.disabled = true;
    }

    // Prevent default form submission (though preventDefault() already does this)
    return false;
  });
});
