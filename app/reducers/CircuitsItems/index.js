import {CIRCUITS_ITEM} from '../../actions/actionType/CircuitsItems';

const initialState = {
  circuitItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CIRCUITS_ITEM:
      // console.log(action, 'action');
      let dd = [...state.circuitItems];

      dd.push(action.data);
      return {
        ...state,
        circuitItems: dd,
      };

    default:
      return state;
  }
};
