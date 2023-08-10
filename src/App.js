import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import AddCar from "./AddCar";
import CarDisplay from "./CarDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const index = items.indexOf(item);
          items.splice(index, 1);
          setData({ items: items });
        }
      }
    );
  };

  const addCarToData = (item) => {
    let items = data["items"]; // get what is already existing

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name && !filters.year && !filters.brand && !filters.champion) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      } else if (filters.year !== 0 && item.year !== filters.year) {
        continue;
      } else if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      } else if (item.champion !== filters.champion) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <CarDisplay deleteItem={deleteItem} items={filterData(data["items"])} />
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
