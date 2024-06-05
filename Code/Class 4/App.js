//React Component ->
// Two Types -> Class Base  == Old
// --> Functional == New

import React from "react";
import ReactDOM from "react-dom/client";

//React Creat Element
const heading = <h5>This is Create 2 React Element</h5>;

//Function Component
const Title = () => <h5>This is Create 1 React Element</h5>;

// --> Functional == New
//Functional Component is a normal Function
//Name of Component Start with capital letters
const Heading1 = () => {
  return (
    <div>
      {heading}
      {Title()}
      <Title />
      <h1>Namste JavaScript</h1>
      <h2>I render this</h2>
    </div>
  );
  //way to insert Create Element  in Function Component
  //Way to inert Component in Component two ways
};

const container = React.createElement(
  "h1",
  {
    id: "container",
  },
  [Heading1]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(container);
// Way to Render React.createElement

root.render(<Heading1 />);
//Way to Render React Functional Component
