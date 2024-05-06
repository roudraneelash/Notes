import { useState } from "react";

const useCustomHook = () => {
  const [input, setInput] = useState("");

  const outputValue = () => {
    const num = parseInt(input);
    console.log(num);
    console.log(typeof num);

    if (isNaN(num)) {
      return "Not a Number";
    } else if (num % 2 === 0 && num % 3 === 0) {
      return "Even and Divisible by 3";
    } else if (num % 3 === 0) {
      return "Divisible by 3";
    } else if (num % 2 === 0) {
      return "Even";
    } else {
      return "Not Even and Not Divisible by 3";
    }
  };

  return { input, setInput, outputValue };
};

export default useCustomHook;
