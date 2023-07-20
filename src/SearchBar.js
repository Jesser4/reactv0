import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);
  const [brand, setBrand] = useState("");
  const [champion, setChampion] = useState(false);

  const searchButtonClick = () => {
    props.callback({
      name: name,
      year: year,
      brand: brand,
      champion: champion,
    });
  };

  return (
    <div>
      <h2>Search for a Car</h2>
      <form>
        <label for="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="year-field">Year:</label>
        <input
          id="year-field"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label for="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <label for="champion-field">World Champion:</label>
        <input
          id="champion-field"
          type="checkbox"
          value={champion}
          onChange={(e) => setChampion(e.target.checked)}
        />
        <button type="button" onClick={searchButtonClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
