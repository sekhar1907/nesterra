import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_ALL_CIRCUIT_INVENTORY} from '../actionType/circuitInventory.type';

export const getInventoryCircuit = (id, setcircuitLoding) => dispatch => {
  Axios.get(`${Base_url}/api/GetCircuitInventoryByLocationId?Locationid=${id}`)
    .then(response => {
      //   console.log(response.data.length);
      if (response.data) {
        dispatch({
          type: GET_ALL_CIRCUIT_INVENTORY,
          payload: {
            data: response.data,
          },
        });
        setcircuitLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
