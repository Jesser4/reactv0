import { AddCar } from "./AddCar.js"

function App() {
  return (
    <div className="App">
      <Title />
      <AddCar />
    </div>
  );
}

function Title(){
  const title = "Virtual Galery.";
  const showTitle = true;

  return(
    <div>
      <h1> {showTitle ? title : "None"} </h1>
      {/* CONDITION ? DoTHIS : ELSE */}
      <p> This is where we can list the cars </p>
      <AddCar />
    </div>
  );
}

export default App();