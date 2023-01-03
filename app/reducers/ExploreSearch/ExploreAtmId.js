import { dataMar } from "../../utils/MarkerData1";
import { ATM_ID,ATM_ID_SEARCH } from '../../actions/actionType/ExploreSearch/index';

const initialState = {
    data:[],
    data1:[],
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case ATM_ID:
            const dataone = dataMar.reduce((acc, {ATM_ID}) => {
                const entry = acc.find(i => i.ATM_ID === ATM_ID);
                if (!entry) {
                  acc.push({
                    ATM_ID,
                  });
                } else {
                  entry.ATM_ID = ATM_ID;
                }
                return acc;
              }, []);
            return {
                data:dataone,
                data1:dataone,
                error:null,
            }
            case ATM_ID_SEARCH:
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
            return state
    }
}