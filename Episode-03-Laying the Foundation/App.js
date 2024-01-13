import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using Core React 🚀"
);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🚀
  </h1>
);

// React Component
const HeadingComponent = () => (
  <div id="container">
    {elem}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React using Functional Component</h1>
  </div>
);

console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
