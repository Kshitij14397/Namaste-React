import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  // const h1 = React.createElement("h1", { name: "Kshitij" }, "Hello");
  // const h1JSX = <h1 name="Kshitij">Hello</h1>;
  // console.log(h1);
  // console.log(h1JSX);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
