function addTask(task) {
  if (task) {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        tasks.push(data);
        updateUI();
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }
}
