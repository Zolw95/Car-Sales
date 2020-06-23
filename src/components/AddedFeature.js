import React from "react";
import { connect } from "react-redux";
import { deleteFeature } from "../actions/carActions";

const AddedFeature = (props) => {
  const onDelete = () => {
    props.deleteFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={onDelete} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { deleteFeature })(AddedFeature);
