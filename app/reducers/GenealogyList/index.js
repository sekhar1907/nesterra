import {GENEOLOGY_LIST} from './../../actions/actionType/GenealogyList/index';

const initialState = {
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENEOLOGY_LIST:
      const d = action.payload.data.map((item, i) => {
        return {...item, isChecked: false};
      });
      return {
        data: d,
        error: null,
      };

    default:
      return state;
  }
};
