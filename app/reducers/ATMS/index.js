import {
  ALL_ATMS,
  ALL_ATMS_FILTER_BY_ACTIVE,
  ALL_ATMS_ALL,
} from './../../actions/actionType/ATMS/index';
const initialState = {
  allAtms: [],
  allAtms1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ATMS:
      // console.log(action, 'action');
      // const acData = action.payload.data.filter(
      //   item => item.ATM_Status === 'Active',
      // );
      return {
        ...state,
        allAtms: action.payload.data,
        allAtms1: action.payload.data,
      };
    case ALL_ATMS_FILTER_BY_ACTIVE:
      // console.log(action, 'action');
      const dataActive = [...state.allAtms1];
      const dataAc = dataActive.filter(item => item.ATM_Status === 'Active');
      return {
        ...state,
        allAtms: dataAc,
      };
    case ALL_ATMS_ALL:
      // console.log(action, 'action');
      const ALLDATA = [...state.allAtms1];

      return {
        ...state,
        allAtms: ALLDATA,
      };

    default:
      return state;
  }
};
