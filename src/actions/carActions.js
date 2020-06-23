import { ADD_FEATURE, DELETE_FEATURE } from "./types";

export const addFeature = (newFeature) => {
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};

export const deleteFeature = (feature) => {
  return {
    type: DELETE_FEATURE,
    payload: feature,
  };
};
