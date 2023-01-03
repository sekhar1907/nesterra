import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_ALL_DEVICES_INVENTORY} from '../actionType/devicesInventory.type';

export const get_all_devices_inventory = (id, setDevicesLoding) => dispatch => {
  Axios.get(`${Base_url}/api/GetDeviceInventoryByLocationId?Locationid=${id}`)
    .then(response => {
      if (response.data) {
        dispatch({
          type: GET_ALL_DEVICES_INVENTORY,
          payload: {
            data: response.data,
            id: id,
          },
        });
        setDevicesLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
