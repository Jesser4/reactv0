function CarDisplay(props) {
  const showCars = (item) => {
    return (
      <div>
        <p>ID: {item.id} </p>
        <p>Name: {item.name}</p>
        <p>Year: {item.year}</p>
        <p>Brand: {item.brand}</p>
        <p>Champion: {item.champion.toString()}</p>
      </div>
    );
  };

  return <div>{props.items.map(showCars)}</div>;
}

export default CarDisplay;
