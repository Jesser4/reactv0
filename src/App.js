import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };
  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>Name: {"name" in data ? data["name"] : "No name to display"}</p>
      <p>Year: {"year" in data ? data["year"] : "No year to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No brand to display"}</p>
      <p>
        Champion:{" "}
        {"champion" in data
          ? data["champion"].toString()
          : "No champion status"}{" "}
      </p>
    </div>
  );
}

export default App;
