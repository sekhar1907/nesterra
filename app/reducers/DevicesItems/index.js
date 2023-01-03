import {DEVICES_ITEM} from './../../actions/actionType/DevicesItems';
const initialState = {
  devicestItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEVICES_ITEM:
      // console.log(action, 'action');
      let dd = [...state.devicestItems];

      dd.push(action.data);
      return {
        ...state,
        devicestItems: dd,
      };

    default:
      return state;
  }
};
