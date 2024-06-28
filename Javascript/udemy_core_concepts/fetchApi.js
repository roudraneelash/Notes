function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
fetchTodos();

//convert into async/await syntax

async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks = data.slice(0, 10);
    console.log(tasks);
  } catch (error) {
    console.log(error);
  }
}
