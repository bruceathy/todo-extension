const toDoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("todo-list");

function editToDo(e) {
  e.contentEditable = true;
  // e.focus();
}

function deleteToDo(e) {
  e.parentElement.remove();
}

addBtn.addEventListener("click", () => {
  const toDo = toDoInput.value;

  if (toDo === "") {
    return;
  } else {
    toDoInput.value = "";
    toDoList.innerHTML += `<li><button onclick="editToDo(this)">${toDo}</button> <button onclick="deleteToDo(this)"><i class="fas fa-trash"></i></button></li>`;
  }
});
