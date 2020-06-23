import React from "react";
import { connect } from "react-redux";

const Total = ({ car: { car, additionalPrice } }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
  car: state.car,
});

export default connect(mapStateToProps)(Total);
