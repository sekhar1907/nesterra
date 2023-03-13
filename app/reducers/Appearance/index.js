import {APPEARANCE_TYPE} from '../../actions/actionType/Appearance';

APPEARANCE_TYPE;
const initialState = {
  appearanceType: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPEARANCE_TYPE:
      // console.log('first');
      return {
        ...state,
        appearanceType: action.data,
      };

    default:
      return state;
  }
};
