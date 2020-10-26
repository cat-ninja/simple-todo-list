const todoInput = document.querySelector(".todo-text");

$(window).on("DOMContentLoaded", async () => {
  const response = await fetch("/items");
  const items = await response.json();
  items.forEach((i) => appendTodoElement(i.value));
});

$(todoInput).on("keyup", (e) => {
  if (e.key === "Enter") addItem();
});

$(".add-item").on("click", () => {
  addItem();
});

function addItem() {
  let todoItem = todoInput.value;
  if (todoItem.length > 0) {
    appendTodoElement(todoItem);
  } else {
    alert("Please enter a title for your TODO item!");
  }
}

function appendTodoElement(value) {
  const a = document.createElement("a");
  a.classList.add("list-group-item", "list-group-item-action");
  const div = document.createElement("div");
  div.classList.add("d-flex", "w-100", "justify-content-between");
  const h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.innerText = value;
  const small = document.createElement("small");
  div.appendChild(h5);
  div.appendChild(small);
  a.appendChild(div);
  document.querySelector(".list-group").appendChild(a);
  todoInput.value = "";
}
