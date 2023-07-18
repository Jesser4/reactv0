import AddCar from "./AddCar.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

function Title() {
  const title = "Virtual Gallery.";
  const showTitle = true;

  return (
    <div>
      <h1> {showTitle ? title : "None"} </h1>
      {/* CONDITION ? DoTHIS : ELSE */}
      <p> This is where we can list the cars </p>
      <AddCar text="Enter Car" number={2} />
      <AddCar />
    </div>
  );
}

export default App;
