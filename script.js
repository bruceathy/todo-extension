const toDoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

let toDoList = [];
const toDosFromLocalStorage = JSON.parse(localStorage.getItem("toDos"));

if (toDosFromLocalStorage) {
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

// RENDER SAVED LIST FROM LOCALSTORAGE
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
  listContainer.innerHTML = listItems;
}

// EDIT TO-DO
// function editToDo(e) {
//   e.contentEditable = true;
//   e.focus();
// }

//DELETE TO-DO
function deleteToDo(e) {
  // localStorage.removeItem(`${e.previousElementSibling.textContent}`);
  // e.parentElement.remove();
  localStorage.clear();
  toDoList = [];
  render(toDoList);

  console.log(localStorage.getItem("toDos"));
}
