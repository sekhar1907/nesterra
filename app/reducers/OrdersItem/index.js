import {ORDERS_ITEM} from '../../actions/actionType/OrdersItem';

const initialState = {
  orderItem: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_ITEM:
      // console.log(action, 'action');
      let dd = [...state.orderItem];

      dd.push(action.data);
      return {
        ...state,
        orderItem: dd,
      };

    default:
      return state;
  }
};
