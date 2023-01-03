import {
  ALL_CARRIER_NUMBER,
  ALL_CARRIER_NUMBER_FILTER,
} from '../../actions/actionType/CarrierNumber';

const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CARRIER_NUMBER:
      return {
        ...state,
        data: action.payload.data,
        data1: action.payload.data,
      };
    case ALL_CARRIER_NUMBER_FILTER:
      // console.log(action.payload.data, 'action.payload.data');
      const datasearch = [...state.data1];

      if (action.data) {
        const newData = datasearch.filter(function (item) {
          const itemData = item.id.toLowerCase();
          // const textData = text;
          return itemData.startsWith(action.data.toLowerCase());
        });
        return {
          ...state,
          data: newData,
        };
      } else {
        return {
          ...state,
          data: state.data1,
        };
      }

    default:
      return state;
  }
};
