import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CIRCUIT} from '../actionType/AllCircuit';

export const getAllCircuit = setLodding3 => dispatch => {
  setLodding3(true);
  Axios.get(
    `${Base_url}/api/GetCircuitInventoryCustomDetails?LocationId=0&BranchId=0&circuitId=0&status=0&vendor=0&type=0&SubCat=0`,
    // `${Base_url}/api/GetCircuitInventoryCustomDetails?LocationId=0&BranchId=0&circuitId=0&status=0&vendor=0&type=0`,
    // `${Base_url}/api/GetCircuitInventoryCustomDetails?LocationId=0&BranchId=0&circuitId=0`,
  )
    .then(response => {
      // console.log(response, 'response');
      if (response.data.length > 0) {
        setLodding3(false);
        dispatch({
          type: ALL_CIRCUIT,
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
