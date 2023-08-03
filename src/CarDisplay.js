function CarDisplay(props) {
  const showCars = (item) => {
    return (
      <tr>
        <th scope="row">{item.id} </th>
        <td>{item.name}</td>
        <td>{item.year}</td>
        <td>{item.brand}</td>
        <td>{item.champion.toString()}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-stripped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Year</th>
              <th scope="col">Brand</th>
              <th scope="col">Champion</th>
            </tr>
          </thead>
          <tbody>{props.items.map(showCars)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CarDisplay;
