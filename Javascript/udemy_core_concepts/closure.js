function outer() {
  let j = 20;
  function inner() {
    let k = 30;
    console.log(j, k);
    k++;
    j++;
  }
  return inner;
}

const inner = outer();
inner(); //output: 20,30
inner(); //output: 21,30

//javascript callstack put the functions in queue , after each completion the fuctions get discarded for the call stack.
// but for closure the outer context is kept in the memory , when the function is made available outside the fucntion scope;
