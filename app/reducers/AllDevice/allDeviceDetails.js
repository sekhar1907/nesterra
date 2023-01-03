import {ALL_DEVICES_DETAILS} from '../../actions/actionType/AllDevice';
const initialState = {
  item: {},
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_DEVICES_DETAILS:
      return {
        ...state,
        item: action.payload.data,
        isLoding: action.payload.loder,
      };

    default:
      return state;
  }
};
