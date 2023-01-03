import {dataMar} from '../../utils/MarkerData1';
import {
  SITE_ID,
  SITE_ID_SEARCH,
} from '../../actions/actionType/ExploreSearch/index';

const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_ID:
      const dataone = dataMar.reduce((acc, {Location_ID}) => {
        const entry = acc.find(i => i.Location_ID === Location_ID);
        if (!entry) {
          acc.push({
            Location_ID,
          });
        } else {
          entry.Location_ID = Location_ID;
        }
        return acc;
      }, []);
      // console.log(dataone);
      return {
        data: dataone,
        data1: dataone,
      };
    case SITE_ID_SEARCH:
      const subtypve = [...state.data1];
      const srcdata = subtypve.filter(function (item) {
        const itemData = item?.Location_ID.toUpperCase();

        return itemData.startsWith(action.data.toUpperCase());
      });
      return {
        ...state,
        data: srcdata,
      };
    default:
      return state;
  }
};
