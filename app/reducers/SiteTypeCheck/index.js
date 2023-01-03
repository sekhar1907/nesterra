import {
  DATA_CENTER,
  OFFICEE,
  BRANCH,
  ATM,
  OTHER,
  THIRD_PARTY,
  SEARCH_CLEAR,
} from '../../actions/actionType/SiteTypeCheck';

DATA_CENTER;
const initialState = {
  data_center: false,
  branch: false,
  office: false,
  atm: false,
  third_party: false,
  other: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_CENTER:
      if (state.data_center) {
        return {
          ...state,
          data_center: false,
        };
      } else {
        return {
          ...state,
          data_center: true,
        };
      }
    case OFFICEE:
      if (state.office) {
        return {
          ...state,
          office: false,
        };
      } else {
        return {
          ...state,
          office: true,
        };
      }
    case BRANCH:
      if (state.branch) {
        return {
          ...state,
          branch: false,
        };
      } else {
        return {
          ...state,
          branch: true,
        };
      }
    case ATM:
      if (state.atm) {
        return {
          ...state,
          atm: false,
        };
      } else {
        return {
          ...state,
          atm: true,
        };
      }
    case THIRD_PARTY:
      if (state.third_party) {
        return {
          ...state,
          third_party: false,
        };
      } else {
        return {
          ...state,
          third_party: true,
        };
      }
    case OTHER:
      if (state.other) {
        return {
          ...state,
          other: false,
        };
      } else {
        return {
          ...state,
          other: true,
        };
      }
    case SEARCH_CLEAR:
      return {
        ...state,
        data_center: false,
        branch: false,
        office: false,
        atm: false,
        third_party: false,
        other: false,
      };

    default:
      return state;
  }
};
