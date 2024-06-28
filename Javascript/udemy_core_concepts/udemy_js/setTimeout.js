//timing events

//setTimeout(function,timeout);

// const print = () => {
//   console.log("hello");
// };

setTimeout(print, 2000); //it prints after the time ends

//setInterval function
const print = () => {
  console.log("hello");
};

var interval = setInterval(print, 1000);
console.log(interval);

//to stop setInterval , we use clearInterval , and for that we need the instance returned by setInterval() when called
let sec = 1;
const time = () => {
  console.log("after" + sec);
  sec++;

  if (sec == 5) clearInterval(interval);
};

var interval = setInterval(time, 1000);
console.log(interval);
