import {dataMar} from '../../utils/MarkerData1';
import {
  ADDRESS_ID,
  ADDRESS_ID_SEARCH,
} from '../../actions/actionType/ExploreSearch/index';

const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_ID:
      const dataone = dataMar.reduce((acc, {FullAddress}) => {
        const entry = acc.find(i => i.FullAddress === FullAddress);
        if (!entry) {
          acc.push({
            FullAddress,
          });
        } else {
          entry.FullAddress = FullAddress;
        }
        return acc;
      }, []);

      return {
        data: dataone,
        data1: dataone,
        error: null,
      };
    case ADDRESS_ID_SEARCH:
      const subtypve = [...state.data1];
      const srcdata = subtypve.filter(function (item) {
        const itemData = item?.ATM_ID.toUpperCase();

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
