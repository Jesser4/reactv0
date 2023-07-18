import React from "react";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("This");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("PenisPenisPenis");
  };

  const updateCountClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Title: {title} </p>
      <p>Counter: {count}</p>
      <button onClick={updateTitleClicked}> Update Title </button>
      <button onClick={updateCountClicked}> Update Count </button>
    </div>
  );
}

export default App;
