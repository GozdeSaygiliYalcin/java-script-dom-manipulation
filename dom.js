const allParagraph = document.querySelectorAll("p");
console.log(allParagraph);

//id leriyle inputların seçilmesi
const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
//button selection first-second input
const button = document.querySelector(".button");

//click listener
button.addEventListener("click", (event) => {
  allParagraph.forEach((parag) => {
    if (parag.textContent.includes(firstInput.value)) {
      parag.classList.add(secondInput.value);
    }
  });
  console.log("Button Clicked");
  event.stopPropagation();
});

// button.addEventListener("click", (event) => {
//   allParagraph.forEach((p) => {
//     if (p.textContent.includes("Main")) {
//       p.classList.add("blue");
//     }
//   });
//   console.log("Button Clicked");
//   event.stopPropagation();
// });

//todos selection
//todos input selection using id
const firstTodosInput = document.getElementById("first-todo-input");
const secondTodosInput = document.getElementById("second-todo-input");
const toDosButton = document.getElementById("todos-button");

const apiURL = "https://jsonplaceholder.typicode.com/";

const getTodosById = (todos, id) => {
  fetch(apiURL + todos + "/" + id)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
// const getTodosById = async (todos, id) => {
//   const response = await fetch(apiURL + todos + "/" + id);
//   const resultUsers = await response.json();
//   return resultUsers;
// };

toDosButton.addEventListener("click", (event) => {
  const todo = getTodosById(firstTodosInput.value, secondTodosInput.value);
  console.log(todo);

  console.log("Button Clicked");
  event.stopPropagation();
});
