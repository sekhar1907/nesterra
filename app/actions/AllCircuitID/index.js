import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CIRCUIT_ID} from '../actionType/AllCircuitID';

export const getAllCircuitID = setLodding1 => dispatch => {
  setLodding1(true);
  // console.log('first');
  Axios.get(`${Base_url}/api/GetCircuitInventoryCircuitIds`)
    .then(response => {
      const data = response.data.sort((a, b) => {
        let fa = a.id.toLowerCase(),
          fb = b.id.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      if (data.length > 0) {
        // console.log(response.data, 'response');
        setLodding1(false);
        dispatch({
          type: ALL_CIRCUIT_ID,
          payload: {
            data: data,
            loder: false,
          },
        });
      } else {
        dispatch({
          type: ALL_CIRCUIT_ID,
          payload: {
            data: data,
            loder: false,
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
