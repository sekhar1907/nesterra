import {
  SITE_ITEM,
  SITE_ITEM_REMOVE,
} from './../../actions/actionType/SiteItem/index';
const initialState = {
  siteItem: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_ITEM:
      // console.log(action.data, 'action');
      let dd = [...state.siteItem];

      dd.push(action.data);
      return {
        ...state,
        siteItem: dd,
      };
    case SITE_ITEM_REMOVE:
      let dd1 = [...state.siteItem];

      const dataone = dd1.filter(item => {
        return item.id !== action.data;
      });
      return {
        ...state,
        siteItem: dataone,
      };

    default:
      return state;
  }
};
