import {ATMS_ITEM} from '../../actions/actionType/AtmsItem';

const initialState = {
  atmsItem: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ITEM:
      // console.log(action, 'action');
      let dd = [...state.atmsItem];

      dd.push(action.data);
      return {
        ...state,
        atmsItem: dd,
      };

    default:
      return state;
  }
};
