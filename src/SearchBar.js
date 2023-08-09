import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);
  const [brand, setBrand] = useState("");
  const [champion, setChampion] = useState(false);

  const searchButtonClick = () => {
    props.updateSearchParams({
      name: name,
      year: year,
      brand: brand,
      champion: champion,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Search for a Car</h2>
      </div>

      <div className="row mt-0">
        <div className="col">
          <label for="name-field">Name:</label>
          <input
            id="name-field"
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label for="year-field">Year:</label>
          <input
            id="year-field"
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="col">
          <label for="brand-field">Brand:</label>
          <input
            id="brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="col">
          <label for="champion-field">World Champion: </label>
          <input
            id="champion-field"
            type="checkbox"
            className="form-check-inline"
            value={champion}
            onChange={(e) => setChampion(e.target.checked)}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-5" />
        <button
          type="button"
          className="btn btn-primary col-2"
          onClick={searchButtonClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
