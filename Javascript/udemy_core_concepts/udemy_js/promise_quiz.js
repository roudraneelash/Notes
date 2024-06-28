function job() {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("Success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then((data) => {
    console.log(data);

    return job(true);
  })
  .then((data) => {
    if (data !== "victory") throw "Defeat";
    return job(true);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error");

    return job(false);
  })
  .then((data) => {
    console.log(data);

    return job(true);
  })
  .catch((error) => {
    console.log(error);
    return "Error caught";
  })
  .then((data) => {
    console.log(data);
    return new Error("test");
  })
  .then((data) => {
    console.log(data);
    return new Error("test");
  })
  .then((data) => {
    console.log("Success:", data.message);
  })
  .catch((data) => {
    console.log("error:", data.message);
  });
