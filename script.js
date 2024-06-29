const toDoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

let toDoList = [];
const toDosFromLocalStorage = JSON.parse(localStorage.getItem("toDos"));

if (toDosFromLocalStorage) {
  toDoList = toDosFromLocalStorage;
  render(toDoList);
}

// RENDER SAVED TO-DOS FROM LOCALSTORAGE
function render(toDoList) {
  let listItems = "";
  toDos.forEach((toDo) => {
    listItems += `
    <li>
      <span>${toDo}</span>
      <button onclick="deleteToDo(this)">
      <i class="fas fa-trash"></i>
      </button>
    </li>`;
  });
  toDoList.innerHTML = listItems;
}

// EDIT TO-DO
// function editToDo(e) {
//   e.contentEditable = true;
//   e.focus();
// }

// DELETE TO-DO
// function deleteToDo(e) {
//   e.parentElement.remove();
//   // localStorage.removeItem(`${e.previousElementSibling.textContent}`);
//   // localStorage.clear();

//   console.log(localStorage);
// }

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
