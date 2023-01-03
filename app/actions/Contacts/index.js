import Axios from 'axios';
import {Base_url} from '../../key';
import {ALL_CONTACT} from '../actionType/Contacts';

export const getContacts = seTcontactLoder => dispatch => {
  seTcontactLoder(true);
  Axios.get(`${Base_url}/api/GetTechnicalContacts`)
    .then(response => {
      // console.log(response.data.length);
      if (response.data) {
        seTcontactLoder(false);
        dispatch({
          type: ALL_CONTACT,
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
