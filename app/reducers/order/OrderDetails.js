import {GET_ORDER_DETAILS} from '../../actions/actionType/action.Order.type';

const initialState = {
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return {
        item: action.payload.data,
      };

    default:
      return state;
  }
};
