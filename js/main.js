let addButton = document.querySelector("#addButton");
let deleteButton = document.querySelector("#deleteButton");
let todoItems = document.querySelector("#todoItems");
// let taskData = document.querySelector("#taskData");
// let taskDataContent = taskData.textContent;
// console.log(taskDataContent);

//! ADD
// addButton.addEventListener("click", function () {
//   let newTask = document.createElement("li");
//   newTask.innerText = "New task!";
//   todoItems.append(newTask);
// });

function addItem() {
  let newTask = document.createElement("li");

  newTask.innerText = "New task!";
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
