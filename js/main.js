let addButton = document.querySelector("#addButton");
let deleteButton = document.querySelector("#deleteButton");
let todoItems = document.querySelector("#todoItems");
let todoInput = document.querySelector("#todoInput");
// let taskData = document.querySelector("#taskData");
// let taskDataContent = taskData.textContent;
// console.log(taskDataContent);

//! ADD
// function addItem() {
//   let todoItems = document.querySelector("#todoItems");
//   let result = (todoInput.value = todoItems.innerHTML);
//   todoItems.innerHTML = todoInput.value;
// }

function addItem() {
  let newTask = document.createElement("li");
  newTask.innerText = todoInput.value;
  todoItems.append(newTask);
}

// ! DELETE
// .addEventListener("click", () => {
//   if (todoItems >= 1) {
//     ;
//   }
//   let lastItem = todoItems.lastElementChild;
//   let myChild1 = todoItems.getElementsByTagName("li")[0];
//   const deletedElement = todoItems.removeChild(myChild1);

//   todoItems.remove(deletedElement);
// });

function deleteBut() {
  let todoItems = document.getElementById("todoItems");
  let myChild = todoItems.getElementsByTagName("li")[0];
  const result = todoItems.removeChild(myChild);
  console.log(result);
}
