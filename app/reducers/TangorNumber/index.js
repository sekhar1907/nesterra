import {
  GET_ALL_TANGOR_NUMBER,
  ALL_TANGOR_NUMBER_FILTER,
} from '../../actions/actionType/TangorNumber';
const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TANGOR_NUMBER:
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
        data1: action.payload.data,
      };
    case ALL_TANGOR_NUMBER_FILTER:
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
