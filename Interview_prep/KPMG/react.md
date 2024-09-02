------------------------- question 1

/\*\*
Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.

Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
Video for reference: https://youtu.be/VzNNjNmbXpY
\*\*/
function App() {
const [] = React.useState("");

return (
<>

<h3>Disable Button Challenge</h3>
<input type="text" />
<button>Submit</button>
</>
);
}

ReactDOM.render(<App />, document.getElementById("root"));

------------------------------ question 2

/\*\*
Challenge: Make the button functional
A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed

Solution: https://codepen.io/angelo_jin/pen/abLwyrL
Video for reference: https://youtu.be/VzNNjNmbXpY
\*\*/
function App() {
const [] = React.useState(true);

return (
<>
<button>Hide Element Below</button>

      <div>Toggle Challenge</div>
    </>

);
}

ReactDOM.render(<App />, document.getElementById("root"));

-------------------------- other questions

/\*\*
All Exercises and Solutions from the video for your convenience
https://youtu.be/VzNNjNmbXpY

Exercises:
Display simple JSX - https://codepen.io/angelo_jin/pen/wvrygZa
Display array of users to browser - https://codepen.io/angelo_jin/pen/QWqQdXE
Show/Hide Element on Screen - https://codepen.io/angelo_jin/pen/zYERZZL
2 way data binding in ReactJS - https://codepen.io/angelo_jin/pen/MWEQmqN
Disable a button - https://codepen.io/angelo_jin/pen/YzrazGY
Update the parent state - https://codepen.io/angelo_jin/pen/JjrLjOy
Dynamically add child components (React Children) - https://codepen.io/angelo_jin/pen/BawrpeX
Sum of Two Numbers - https://codepen.io/angelo_jin/pen/zYEWZNR
Create Counter App - https://codepen.io/angelo_jin/pen/mdBxWwN
Fetch data from an API - https://codepen.io/angelo_jin/pen/oNGqZpm

Solutions:
Display simple JSX - https://codepen.io/angelo_jin/pen/xxXrZLd
Display array of users to browser - https://codepen.io/angelo_jin/pen/wvreMpZ
Show/Hide Element on Screen - https://codepen.io/angelo_jin/pen/abLwyrL
2 way data binding in ReactJS - https://codepen.io/angelo_jin/pen/yLzvMop
Disable a button - https://codepen.io/angelo_jin/pen/dyVmyYz
Update the parent state - https://codepen.io/angelo_jin/pen/KKXoKgO
Dynamically add child components (React Children) - https://codepen.io/angelo_jin/pen/MWEVJNb
Sum of Two Numbers - https://codepen.io/angelo_jin/pen/BawrWzy
Create Counter App - https://codepen.io/angelo_jin/pen/yLzKMXX
Fetch data from an API - https://codepen.io/angelo_jin/pen/zYEWZdW
\*\*/
