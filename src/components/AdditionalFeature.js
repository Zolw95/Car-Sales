import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/carActions";

const AdditionalFeature = (props) => {
  const add = () => {
    props.addFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={add} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => ({
  car: state.car,
});

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
