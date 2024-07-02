const toDoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

let toDoList = [];
const toDosFromLocalStorage = JSON.parse(localStorage.getItem("toDos"));

if (toDosFromLocalStorage.length > 0) {
  toDoList = toDosFromLocalStorage;
  render(toDoList);
} else {
  listContainer.innerHTML = "<p class='empty-msg'>Empty List</p>";
}

addBtn.addEventListener("click", () => {
  if (toDoInput.value === "") {
    return;
  } else {
    toDoList.push(toDoInput.value);
    localStorage.setItem("toDos", JSON.stringify(toDoList));
    toDoInput.value = "";
    render(toDoList);

    console.log(localStorage.getItem("toDos"));
  }
});

function render(toDos) {
  let listItems = "";
  for (let i = 0; i < toDos.length; i++) {
    listItems += `
    <li>
      <button onclick="editToDo(this)">${toDos[i]}</but>
      <button onclick="deleteToDo(this)">
      <i class="fas fa-trash"></i>
      </button>
    </li>`;
  }
  listContainer.innerHTML = listItems;
}

// EDIT TO-DO
function editToDo(e) {
  e.contentEditable = true;
  e.focus();
}

function deleteToDo(e) {
  toDoList.pop(e.parentElement.textContent);
  localStorage.setItem("toDos", JSON.stringify(toDoList));
  render(toDoList);

  console.log(localStorage.getItem("toDos"));
}
