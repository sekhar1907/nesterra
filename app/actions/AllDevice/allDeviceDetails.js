import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_DEVICES_DETAILS} from '../actionType/AllDevice';

export const getAllDeviceDetails =
  (id, setLodding, deviceRefDetails) => dispatch => {
    // console.log(deviceRef, 'deviceRef');
    // setLodding(true);
    Axios.get(`${Base_url}/api/GetDevicesDetailsByID?id=${id}`)
      .then(response => {
        if (response.data.length > 0) {
          deviceRefDetails.current.snapToIndex(2);
          setLodding(false);
          dispatch({
            type: ALL_DEVICES_DETAILS,
            payload: {
              data: response.data[0],
              loder: false,
            },
          });
        } else {
          dispatch({
            type: ALL_DEVICES_DETAILS,
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
