import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CARRIER_NUMBER} from '../actionType/CarrierNumber';

export const GetAllCarrierNumber = setbootSheetLodder => dispatch => {
  // console.log(name);
  setbootSheetLodder(true);
  Axios.get(`${Base_url}/api/GetCarrierNumber`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data);
        setbootSheetLodder(false);
        dispatch({
          type: ALL_CARRIER_NUMBER,
          payload: {
            data: response.data,
          },
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
