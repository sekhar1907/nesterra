import {MAPTYPE} from '../../actions/actionType/MapType';
import {LOCATION_INFO} from './../../actions/actionType/LocationInfo/index';

const initialState = {
  locationInfo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_INFO:
      return {
        ...state,
        locationInfo: action.payload.data,
      };

    default:
      return state;
  }
};
