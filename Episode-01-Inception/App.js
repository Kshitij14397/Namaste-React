const parent = React.createElement("div", {  }, [
  React.createElement("h1", {id: "container"}, "Hello World"),
  React.createElement("h1", {}, "Hello Kshitij"),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
