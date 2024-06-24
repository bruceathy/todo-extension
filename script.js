const toDoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("todo-list");

function editToDo() {
  const toDoItem = document.getElementById("todo-item");
  toDoItem.contentEditable = true;
  toDoItem.focus();
}

function deleteToDo(e) {
  e.parentElement.remove();
}

// FIX THIS FUNCTION
function completeToDo() {
  const toDoItem = document.getElementById("todo-item");
  toDoItem.style.textDecoration = "line-through";
}

addBtn.addEventListener("click", () => {
  const toDo = toDoInput.value;
  toDoInput.value = "";
  toDoList.innerHTML += `<li><p id="todo-item">${toDo}</p> <button onclick="completeToDo(this)"><i class="fas fa-check"></i></button> <button onclick="editToDo(this)"><i class="fas fa-edit"></i></button> <button onclick="deleteToDo(this)"><i class="fas fa-trash"></i></button></li>`;
});
