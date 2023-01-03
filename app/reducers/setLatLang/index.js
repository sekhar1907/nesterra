import {SET_LAT_LNG} from '../../actions/action.type';

const initialState = {
  lat: 42.340350646,
  lng: -71.06219976,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAT_LNG:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
      };

    default:
      return state;
  }
};
