import {dataMar} from '../../utils/MarkerData1';
import {
  CIRCUIT_ID,
  CIRCUIT_ID_SEARCH,
} from '../../actions/actionType/ExploreSearch/';

const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CIRCUIT_ID:
      let dataone = [];

      dataMar.map((item, i) => {
        dataone.push(item.Circuit_ID.split(','));
      });

      return {
        data: dataone.flat(),
        data1: dataone.flat(),
        error: null,
      };
    case CIRCUIT_ID_SEARCH:
      const subtypve = [...state.data1];
      const srcdata = subtypve.filter(function (item) {
        const itemData = item.toUpperCase();

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
