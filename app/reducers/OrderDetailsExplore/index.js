import {ORDER_DETAILS_FOR_EXPLORE} from '../../actions/actionType/OrderDetailsExplore';

const initialState = {
  item: {},
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ORDER_DETAILS_FOR_EXPLORE:
      return {
        ...state,
        item: action.payload.data,
      };

    default:
      return state;
  }
};
