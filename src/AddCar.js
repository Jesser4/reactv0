import React from "react";
import { PropTypes } from "prop-types";

function AddCar(props) {
  const value = props.text;
  return (
    <form>
      <label for="text_form"> Type #{props.number} Car Name: </label>
      <input type="text" value={value} id="text_form" />
    </form>
  );
}

// this makes a default value if one is mot passed thru

AddCar.defaultProps = {
  text: "null",
  number: 0,
};

/* This is creating boundaries for what prop types are passed */

AddCar.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
};

export default AddCar;
