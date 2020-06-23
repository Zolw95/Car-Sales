import { ADD_FEATURE, DELETE_FEATURE } from "../actions/types";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const addedFeaturesList = [...state.car.features];
      const additionalFeaturesList = state.additionalFeatures.filter(
        (feature) => {
          if (feature.id !== action.payload.id) return feature;
        }
      );
      return {
        // ...state,
        // car: {
        //   ...state.car,
        //   features: [...state.car.features, action.payload],
        //   price: state.car.price + action.payload.price,
        // },
        ...state,
        additionalFeatures: additionalFeaturesList,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
          additionalPrice: state.additionalPrice + action.payload.price,
        },
      };
    case DELETE_FEATURE:
      // const addedFeatList = [...state.car.features];
      // const removeFeatureList = state.car.features.filter(
      //   (feature) => {
      //     if (feature.id !== action.payload.id) return feature;
      //   } else {
      //     additionalFeatures.push(action.payload)
      //   }
      // );
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter((feature) => {
              if (feature.id !== action.payload.id) {
                return feature;
              } else {
                state.additionalFeatures.push(action.payload);
              }
            }),
          ],
        },
        additionalPrice: state.additionalPrice - action.payload.price,
      };
    default:
      return state;
  }
};
