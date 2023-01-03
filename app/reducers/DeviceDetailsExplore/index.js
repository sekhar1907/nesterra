import {DEVICE_DETAILS_FOR_EXPLORE} from '../../actions/actionType/DeviceDetailsExplore';

const initialState = {
  item: {},
  id: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEVICE_DETAILS_FOR_EXPLORE:
      // console.log(action, 'action');
      return {
        ...state,
        item: action.payload.data,
        id: action.payload.id,
      };

    default:
      return state;
  }
};
