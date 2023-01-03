import {CIRCUIT_DETAILS_EXPLORE} from '../../actions/actionType/CircuitDetailsExplore';

const initialState = {
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CIRCUIT_DETAILS_EXPLORE:
      return {
        ...state,
        item: action.payload.data,
      };

    default:
      return state;
  }
};
