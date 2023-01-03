import Axios from 'axios';
import {Base_url} from '../../key';

import {ALL_DEVICES} from '../actionType/AllDevice';

export const getAllDevice = setLodding1 => dispatch => {
  setLodding1(true);
  Axios.get(
    `${Base_url}/api/GetAllDevicesInventory?id=0&status=0&type=0&vendor=0&DeviceName=0&BranchID=0&Function=0`,
  )
    .then(response => {
      // console.log(response.data.length, 'ac');
      if (response.data.length > 0) {
        setLodding1(false);
        dispatch({
          type: ALL_DEVICES,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
