import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddCar from "./AddCar";
import CarDisplay from "./CarDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addCarToData = (item) => {
    let items = data["items"]; // get what is already existing
    item.id = items.length;
    items.push(item); // update array
    setData({ items: items }); //set to new array
    console.log(data);
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }

      if (filters.year !== 0 && item.year !== filters.year) {
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      if (item.champion !== filters.champion) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <CarDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddCar addCar={addCarToData} />
      </div>
    </div>
  );
}

export default App;
