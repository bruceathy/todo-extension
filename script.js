const toDoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

let toDoList = [];
const toDosFromLocalStorage = JSON.parse(localStorage.getItem("toDos"));

// Initial render
if (toDosFromLocalStorage) {
  toDoList = toDosFromLocalStorage;
  render(toDoList);
} else {
  listContainer.innerHTML = "<p class='empty-msg'>Empty List</p>";
}

// Add To list
addBtn.addEventListener("click", () => {
  if (toDoInput.value === "") {
    return;
  } else {
    toDoList.push(toDoInput.value);
    toDoInput.value = "";
    render(toDoList);
  }
});

// Delete To list
function deleteToDo(e) {
  toDoList.pop(`${e.parentElement.textContent}`);
  render(toDoList);
}

// Render
function render(toDos) {
  let listItems = "";

  for (let i = 0; i < toDos.length; i++) {
    listItems += `
    <li>
      <span>${toDos[i]}</span>
      <button onclick="deleteToDo(this)">
      <i class="fas fa-trash"></i>
      </button>
    </li>`;
  }

  localStorage.setItem("toDos", JSON.stringify(toDos));

  if (toDoList.length === 0) {
    listContainer.innerHTML = "<p class='empty-msg'>Empty List</p>";
  } else {
    listContainer.innerHTML = listItems;
  }
}
