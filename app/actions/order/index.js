import {GET_ORDER, GET_ORDER_DETAILS} from '../actionType/action.Order.type';
import Axios from 'axios';
import {Base_url} from '../../key';

export const get_order = (id, setOrderLoding) => dispatch => {
  Axios.get(
    `${Base_url}/api/GetOrdersCustomdetailsByLocationID?Locationid=${id}`,
  )
    .then(response => {
      if (response.data) {
        dispatch({
          type: GET_ORDER,
          payload: {
            data: response.data,
            id: id,
          },
        });
        setOrderLoding(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const get_order_details =
  (inv_Id, setLodding1, orderRefExplore) => dispatch => {
    // const loca_Id = 'MST0007215';
    // const inv_Id = 'CZB18062';
    // console.log(inv_Id, setLodding, orderRefExplore);
    setLodding1(true);
    Axios.get(
      `${Base_url}/api/GetOrdersAlldetailsByInventoryID?InventoryID=${inv_Id}`,
    )
      .then(response => {
        if (response.data.length > 0) {
          // console.log(response.data);
          orderRefExplore.current.snapToIndex(2);
          setLodding1(false);

          dispatch({
            type: GET_ORDER_DETAILS,
            payload: {
              data: response.data[0],
            },
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
