React can be incorporated in a JS file using React CDNS.

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

React CDN contains all the core modules of React
ReactDOM is responsible for controlling the DOM of the broswer.

-- To create a react element instead of using jsx, const header = React.createElement("h1", {}, "Heading 1");
-- a single root is created , and the dymanic content is controlled inside that , ReactDOM.createRoot(document.getElementById("root"));, OVERRIDE all the content inside root
-- this is the reason why react is known as SPA(single page application), i.e single HTML file

-- to create the below structure using React.createElement

<div>
<div>
<h1 className="heading">Hello world</h1>
</div>
</div>

const heading1= React.createElement("h1",{className="heading"},"Hello world");
const div= React.createElement("div",{},heading1);
const component=React.createElement("div",{},div);
