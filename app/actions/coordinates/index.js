import {GET_COORDINATES, MARKER_IS_SELECTED} from '../action.type';
import {SITE_STATUS_COORDINATES} from '../action.coordinate.type';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {Base_url} from '../../key';
import {FILTER_MARKER} from '../actionType/action.Coordinatefilter.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {markardata} from '../../utils/markerData';
import {dataMar} from '../../utils/MarkerData1';

export const get_coordinates = () => dispatch => {
  dispatch({
    type: GET_COORDINATES,
    payload: {
      data: dataMar,
      lat: dataMar[2].Latitude,
      lng: dataMar[2].Longitude,
    },
  });
  // Axios.get(`${Base_url}/citizenapi/api/GetLocationDataByCoordinates?limit=100`)
  // const value = await AsyncStorage.getItem('@coordinate');
  // const data = value != null ? JSON.parse(value) : null;
  // console.log(JSON.stringify(data), 'value r');
  // if (data !== null) {
  //   dispatch({
  //     type: GET_COORDINATES,
  //     payload: {
  //       data: data,
  //       lat: data[5].Latitude,
  //       lng: data[5].Longitude,
  //     },
  //   });
  // } else {
  // // console.log(typeof response.data, 'response');
  // await AsyncStorage.setItem(
  //   '@coordinate',
  //   JSON.stringify(response.data),
  // );
  // const value = await AsyncStorage.getItem('@coordinate');
  // console.log(value, 'response');

  // }
  // Axios.get(`${Base_url}/api/GetLocationData?limit=10`);
  // console.log(markardata, 'markardata');
  // fetch(`${Base_url}/api/GetLocationDataAll?limit=1200`, {
  //   method: 'get',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(async response => {
  //     dispatch({
  //       type: GET_COORDINATES,
  //       payload: {
  //         data: response,
  //         lat: response[2].Latitude,
  //         lng: response[2].Longitude,
  //       },
  //     });
  //   })

  // .then(async response => {
  //   const TaskSchema = {
  //     name: 'Task',
  //     properties: {
  //       _id: 'int',
  //       name: 'string',
  //       status: 'string?',
  //     },
  //     primaryKey: '_id',
  //   };
  //   const realm = await Realm.open({
  //     path: 'myrealm',
  //     schema: [TaskSchema],
  //   });
  //   realm.write(() => {
  //     const da = [
  //       {
  //         _id: 0,
  //         name: 'go grocery shopping',
  //         status: 'Open',
  //       },
  //       {
  //         _id: 1,
  //         name: 'go grocery shopping',
  //         status: 'Open',
  //       },
  //     ];
  //     // da.map((item, i) => {
  //     //   realm.create('Task', {
  //     //     _id: i,
  //     //     name: item.name,
  //     //     status: item.status,
  //     //   });
  //     // });
  //   });
  //   const cats = realm.objects('Task');
  //   console.log('cats', cats);
  //   dispatch({
  //     type: GET_COORDINATES,
  //     payload: {
  //       data: response.data,
  //       lat: response.data[2].Latitude,
  //       lng: response.data[2].Longitude,
  //     },
  //   });
  // })
  // .catch(error => {
  //   console.log(error, 'ooo');
  // });
};
//active&inactive
export const sity_status_coordinates = () => async dispatch => {
  Axios.get(
    `${Base_url}/api/GetLocationDataBySiteStatus?LocationStatusDesc=active`,
  )
    .then(response => {
      // console.log(response.data.length);
      dispatch({
        type: SITE_STATUS_COORDINATES,
        payload: {
          data: response.data,
          lat: response.data[600].Latitude,
          lng: response.data[660].Longitude,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};
export const marker_seleted = id => dispatch => {
  dispatch({
    type: MARKER_IS_SELECTED,
    payload: {
      id: id,
    },
  });
};
export const third_party_filter = HierarchyLocationType => dispatch => {
  dispatch({
    type: FILTER_MARKER,
    payload: {
      HierarchyLocationType: HierarchyLocationType,
    },
  });
};
