import {ALL_ORDERS_TYPE} from '../../actions/actionType/OrdersType';
const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ORDERS_TYPE:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
