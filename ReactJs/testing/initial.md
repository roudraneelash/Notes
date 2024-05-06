to use React-testing-library using vite

npm install --save-dev @testing-library/react
npm i -D jest
npx jest --init
npm i -D jest-environment-jsdom
npm install --save-dev babel-jest @babel/core @babel/preset-env
.babelrc
{
"presets": [
["@babel/preset-env", { "targets": { "node": "current" } }],
["@babel/preset-react", { "runtime": "automatic" }]
]
}
npm i -D @babel/preset-react

// to mock async function

import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { getUser } from "./test_component/getData";

jest.mock("./test_component/getData"); // Mock getUser function to control its behavior

describe("when the component fetches user data", () => {
// Clear any previous calls to the mock function before each test
beforeEach(() => {
getUser.mockClear(); // Clear mock call history
});

test("should call getUser once when component is rendered", async () => {
// Render the component
render(<App />);

    // Wait for getUser to be called at least once
    await waitFor(() => {
      expect(getUser).toHaveBeenCalledTimes(1); // Assert getUser is called once
    });

// Check that 'David' appears in the rendered component
expect(screen.getByText("David")).toBeInTheDocument(); // Assert "David" is in the document
});
});
