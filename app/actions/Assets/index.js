import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_ASSETS} from '../actionType/Assets';
export const getAllAssets = setLodding3 => dispatch => {
  Axios.get(
    `${Base_url}/api/GetCircuitInventoryCustomDetails?LocationId=0&BranchId=0&circuitId=0`,
  )
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data);
        setLodding3(false);
        dispatch({
          type: ALL_ASSETS,
          payload: {
            data: response.data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: ALL_ASSETS,
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
