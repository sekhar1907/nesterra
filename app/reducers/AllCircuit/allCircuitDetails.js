import {ALL_CIRCUIT_DETAILS} from '../../actions/actionType/AllCircuit';

const initialState = {
  item: {},
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CIRCUIT_DETAILS:
      return {
        ...state,
        item: action.payload.data,
        isLoding: action.payload.loder,
      };

    default:
      return state;
  }
};
