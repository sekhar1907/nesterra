import {
  ALL_CONTACT,
  VENDOR,
  INDIVISUAL,
  CONTACT_SEARCH,
} from '../../actions/actionType/Contacts';

ALL_CONTACT;
const initialState = {
  item: [],
  item1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CONTACT:
      const d = action.payload.data.filter(item => {
        return item.Type === 'Individual';
      });
      return {
        ...state,
        item: d,
        item1: action.payload.data,
      };
    case INDIVISUAL:
      const ddd = [...state.item1];
      const vendor = ddd.filter(item => {
        return item.Type === 'Individual';
      });

      return {
        ...state,
        item: vendor,
      };
    case VENDOR:
      const dd = [...state.item1];
      const ind = dd.filter(item => {
        return item.Type === 'Entity';
      });

      return {
        ...state,
        item: ind,
      };
    case CONTACT_SEARCH:
      const datasearch = [...state.item1];

      if (action.data) {
        const newData = datasearch.filter(function (item) {
          const itemData = item.value.toLowerCase();
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
