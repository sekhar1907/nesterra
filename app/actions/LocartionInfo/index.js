import Axios from 'axios';
import {Base_url} from '../../key';
import {LOCATION_INFO} from '../actionType/LocationInfo';

export const getLocationInfo = id => dispatch => {
  // const data = useSelector(state => state);
  // console.log(data);
  // const id = 'MST0000914';
  Axios.get(`${Base_url}/api/GetLocationInformationByLocation?Locationid=${id}`)
    .then(response => {
      // console.log(response.data);
      dispatch({
        type: LOCATION_INFO,
        payload: {
          data: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};
