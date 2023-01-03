import Axios from 'axios';
import {Base_url} from '../../key';
import {GET_ALL_TANGOR_NUMBER} from '../actionType/TangorNumber';

export const getAllTangorNumber = setbootSheetLodder => dispatch => {
  setbootSheetLodder(true);
  Axios.get(`${Base_url}/api/GetTangoeNumber`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data, 'tang');

        dispatch({
          type: GET_ALL_TANGOR_NUMBER,
          payload: {
            data: response.data,
          },
        });
        setbootSheetLodder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
