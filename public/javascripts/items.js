const todoInput = document.querySelector(".todo-text");

// $(window).on("DOMContentLoaded", async () => {
//   const response = await fetch("/items");
//   const items = await response.json();
//   items.forEach((i) => appendTodoElement(i.value));
// });

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
  // Create HTML elements
  const a = document.createElement("a");
  const div = document.createElement("div");
  const itemDiv = document.createElement("div");
  const checkerDiv = document.createElement("div");
  const h5 = document.createElement("h5");
  const small = document.createElement("small");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  // Assign desired classes
  a.classList.add("list-group-item", "list-group-item-action");
  div.classList.add("d-flex", "w-100", "justify-content-between");
  itemDiv.classList.add("item");
  checkerDiv.classList.add("checker", "d-flex", "align-items-center");
  h5.classList.add("mb-1");
  // Set the text of the element
  h5.innerText = value;
  small.innerText = "today";
  // Construct elements tree
  itemDiv.appendChild(h5);
  itemDiv.appendChild(small);
  checkerDiv.appendChild(checkbox);
  div.appendChild(itemDiv);
  div.appendChild(checkerDiv);
  a.appendChild(div);
  document.querySelector(".list-group").prepend(a);
  // Flush the input
  todoInput.value = "";
}
