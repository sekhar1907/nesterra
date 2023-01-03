import { dataMar } from "../../utils/MarkerData1";
import { BRANCH_ID,BRANCH_ID_SEARCH } from '../../actions/actionType/ExploreSearch/index';

const initialState = {
    data:[],
    data1:[],
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case BRANCH_ID:
            const dataone = dataMar.reduce((acc, {Branch_ID}) => {
                const entry = acc.find(i => i.Branch_ID === Branch_ID);
                if (!entry) {
                  acc.push({
                    Branch_ID,
                  });
                } else {
                  entry.Branch_ID = Branch_ID;
                }
                return acc;
              }, []);
            return {
                data:dataone,
                data1:dataone,
                error:null,
            }
            case BRANCH_ID_SEARCH:
              const subtypve = [...state.data1];
              const srcdata = subtypve.filter(function (item) {
                const itemData = item?.Branch_ID.toUpperCase();
      
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