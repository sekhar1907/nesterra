import {MAPTYPE} from '../../actions/actionType/MapType';

const initialState = {
  mapType: 'standard',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAPTYPE:
      return {
        ...state,
        mapType: action.payload.data,
      };

    default:
      return state;
  }
};
