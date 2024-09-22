let titleInput = document.getElementById("title");
let statusInput = document.getElementById("checkbox");
let showTodosDiv = document.getElementById("show-todos");
let form = document.getElementById("form");

let todoArr = JSON.parse(localStorage.getItem("todos")) || [];

const handleSubmit = (event) => {
  event.preventDefault();
  let obj = {
    id: Date.now(),
    title: titleInput.value,
    status: statusInput.checked,
  };
  todoArr.push(obj);
  localStorage.setItem("todos", JSON.stringify(todoArr));
  addTodo();
  titleInput.value = "";
  statusInput.checked = false;
};

form.addEventListener("submit", handleSubmit);

addTodo();

const handleChange = (id) => {
  todoArr = todoArr.map((todo) => {
    if (todo.id === id) {
      todo.status = !todo.status;
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todoArr));
  addTodo();
};

const handleDeleteTodo = (id) => {
  todoArr = todoArr.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todoArr));
  addTodo();
};

const handlesubmitEdit = (id, newTitle) => {
  todoArr = todoArr.map((todo) => {
    if (todo.id === id) {
      todo.title = newTitle;
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todoArr));
  addTodo();
};

function addTodo() {
  showTodosDiv.innerHTML = "";
  todoArr.forEach((todo) => {
    showTodosDiv.innerHTML += `
      <div class="todo-container col-sm-3 p-2">
        <h1 class="fs-3">Title: ${todo.title}</h1>
        <h1 class="fs-5">Status: ${todo.status}</h1>
        <label>Status:<input type="checkbox" ${
          todo.status ? "checked" : ""
        } onchange="handleChange(${todo.id})"/>
        </label>
        <button class="btn btn-outline-danger" onclick="handleDeleteTodo(${
          todo.id
        })">Delete</button>
        <form onsubmit="event.preventDefault(); handlesubmitEdit(${
          todo.id
        }, this.newTitle.value);">
          <input placeholder="new title" name="newTitle"/>
          <button class="btn btn-outline-info" type="submit">Edit Title</button>
        </form>
      </div>
    `;
  });
}

// Hello
