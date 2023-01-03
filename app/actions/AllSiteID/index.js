import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_SITE_ID} from '../actionType/AllSiteID';

export const getAllSiteID = setLodding1 => dispatch => {
  setLodding1(true);
  Axios.get(`${Base_url}/api/GetCircuitInventorySiteIds`)
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
        setLodding1(false);
        dispatch({
          type: ALL_SITE_ID,
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
