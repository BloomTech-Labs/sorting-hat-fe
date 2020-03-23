import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import Quiz from './components/Quiz';
// import Results from './components/Results';
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders an h2?", () => {
//   const { getByText } = render(<App />);

test('App renders without crashing', () => {
  render(
  <Router>
    <App />
  </Router>);
});

// test('Quiz renders without crashing', () => {
//   render(
//   <Router>
//     <Quiz />
//   </Router>);
// });

// test('Results renders without crashing', () => {
//   render(
//   <Router>
//     <Results />
//   </Router>);
// });

//   expect(getByText(/previous/i));
//   expect(getByText(/next/i));
// });



// app.test.js

// import React from "react";
// import App from "./App";
// import { render } from "@testing-library/react";

// test("tests if there is a darkmode class", () => {
//   const { getByTestId } = render(<App />);
//   const whateverElement = getByTestId("darkmodeswitcher");
//   expect(whateverElement).toBeTruthy();
// });




// DASHBOARD.JS

// import React from "react";
// import useDarkMode from "./Hooks/DarkMode";

// const DashBoard = () => {
//   const [darkMode, setDarkMode] = useDarkMode(false);
//   const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };
//   return (
//     <nav className="navbar">
//       <h1>Women's World Cup Player List 2020</h1>
//       <div className="dark-mode__toggle">
//         <div
//           onClick={toggleMode}
//           data-testid="darkmodeswitcher"
//           className={darkMode ? "toggle toggled" : "toggle"}
//         />
//       </div>
//     </nav>
//   );
// };

// export default DashBoard;