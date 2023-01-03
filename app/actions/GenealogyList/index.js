import Axios from 'axios';
import {Base_url} from '../../key';

import {GENEOLOGY_LIST} from './../actionType/GenealogyList/index';

export const getGeneoLogyList = () => dispatch => {
  // const data = useSelector(state => state);
  // console.log(data);
  // const id = 'MST0000914';
  Axios.get(`${Base_url}/api/GetGeneologylist`)
    .then(response => {
      //   console.log(response.data);
      dispatch({
        type: GENEOLOGY_LIST,
        payload: {
          data: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};
