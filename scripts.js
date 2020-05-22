let arrayofTodos = [
  {
    "userID": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }
]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayofTodos = json);
}

const logTodos = () => {
  console.log(arrayofTodos);
}

const populateTodos = () => {
  let todoList = document.getElementById("todo-list"); //capture the ol item into a variable

  for(i = 0; i < arrayofTodos.length; i++) {
    let todoItem = document.createElement("li"); //createElement to make a new "li"
    let todoTitle = document.createTextNode(arrayofTodos[i].title); //createText inside the li using the title property
    todoItem.appendChild(todoTitle); //append the text to the new element
    todoList.appendChild(todoItem); //append the element to the ol element
  }
}

const filterTodos = () => {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = null;

  const num = document.getElementById("number").valueAsNumber;

  arrayofTodos = arrayofTodos.filter(function(todo) {
    return todo.userId == num;
  });

  populateTodos();
}
