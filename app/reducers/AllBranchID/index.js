import {
  ALL_BRANCH_ID,
  ALL_BRANCH_ID_FILTER_ID,
} from '../../actions/actionType/AllBranchID';
const initialState = {
  allBranchID: [],
  allBranchID1: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_BRANCH_ID:
      //   console.log(action.payload.data);
      return {
        ...state,
        allBranchID: action.payload.data,
        allBranchID1: action.payload.data,
      };
    case ALL_BRANCH_ID_FILTER_ID:
      const data = [...state.allBranchID1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData1 = data.filter(function (item) {
          const itemData = item?.id.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        // console.log(newData1, 'newData1');
        return {
          ...state,
          allBranchID: newData1,
        };
      } else {
        return {
          ...state,
          allBranchID: state.allBranchID1,
        };
      }

    default:
      return state;
  }
};
