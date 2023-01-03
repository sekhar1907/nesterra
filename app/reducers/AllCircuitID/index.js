import {
  ALL_CIRCUIT_ID,
  ALL_CIRCUITSID_FILTER_BY_CIRCUIT_ID,
} from '../../actions/actionType/AllCircuitID';

const initialState = {
  allCircuitID: [],
  allCircuitID1: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CIRCUIT_ID:
      //   console.log(action.payload.data);
      return {
        ...state,
        allCircuitID: action.payload.data,
        allCircuitID1: action.payload.data,
      };
    case ALL_CIRCUITSID_FILTER_BY_CIRCUIT_ID:
      const data = [...state.allCircuitID1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData1 = data.filter(function (item) {
          const itemData = item?.id.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          allCircuitID: newData1,
        };
      } else {
        return {
          ...state,
          allCircuitID: state.allCircuitID1,
        };
      }
    default:
      return state;
  }
};
