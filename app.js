import React from "react";
import ReactDOM from "react-dom/client";

//JSX transpiles before reaching the js engine - Parcel - Babel
//JSX->ReactElement->HTML Element

//React functional component

const Title = () => <h1>This is a title component</h1>;

const number = 3;

//Component composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <h3>Lesson number {number}</h3>
      <Title />
      {Title()}
      <h2 className="heading">A functional component header</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
