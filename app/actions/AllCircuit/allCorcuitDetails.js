import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CIRCUIT_DETAILS} from '../actionType/AllCircuit';

export const getAllCircuitDetails =
  (id, setLodding, circuitRefDetails) => dispatch => {
    // console.log(id);
    setLodding(true);
    // Axios.get(`${Base_url}/api/GetCircuitInventoryByCircuitId?CircuitId=${id}`)
    Axios.get(`${Base_url}/api/GetCircuitInventoryByCircuitId/${id}`)
      .then(response => {
        if (response.data.length > 0) {
          circuitRefDetails.current.snapToIndex(2);
          setLodding(false);

          dispatch({
            type: ALL_CIRCUIT_DETAILS,
            payload: {
              data: response.data[0],
              loder: false,
            },
          });
        } else {
          dispatch({
            type: ALL_CIRCUIT_DETAILS,
            payload: {
              data: response.data[0],
              loder: false,
            },
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
