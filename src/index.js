document.addEventListener('DOMContentLoaded', function() {
  const callForm = document.getElementById('create-task-form')
  const newList = document.getElementById('tasks')

  callForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const li = document.createElement("li")
    const input = document.getElementById("new-task-description").value
    li.textContent = input
    newList.appendChild(li)
  })
});
