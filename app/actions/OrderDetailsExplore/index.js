import {ORDER_DETAILS_FOR_EXPLORE} from '../actionType/OrderDetailsExplore';
import Axios from 'axios';
import {Base_url} from '../../key';

export const getOrderDetailsExpolore =
  (locationId, invId, setLodding, orderRefExplore) => dispatch => {
    setLodding(true);
    Axios.get(
      //api/GetOrdersAlldetailsByLocationID?Locationid=MST0007215&InventoryID=CZB18062
      `${Base_url}/api/GetOrdersAlldetailsByLocationID?Locationid=${locationId}&InventoryID=${invId}`,
    )
      .then(response => {
        if (response.data.length > 0) {
          //   console.log(response.data[0], 'ppp');
          dispatch({
            type: ORDER_DETAILS_FOR_EXPLORE,
            payload: {
              data: response.data[0],
            },
          });
          orderRefExplore.current.snapToIndex(2);
          setLodding(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
