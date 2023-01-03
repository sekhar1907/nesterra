import {LocationKey} from '../../key';
import {GET_PHOTO_URL_FROM_MAP} from '../actionType/action.photoMapurl.type';

export const photo_url_from_map = (lat, lng) => dispatch => {
  // console.log(lat, lng, 'lat,lng');

  let radMetter = 20 * 1000; // Search withing 2 KM radius

  const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    lat +
    ',' +
    lng +
    '&radius=' +
    radMetter +
    '&key=' +
    LocationKey;

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      // console.log(res.results, 'll');
      //   dispatch({
      //     type: GET_PHOTO_URL_FROM_MAP,
      //     payload: {
      //       data: res.results,
      //     },
      //   });
      //   res.results.map((item, i) => {
      //     const photo = {
      //       url: item.photos[0].photo_reference,
      //     };
      //     places.push(photo);
      //   });
      //   console.log(places);
    })
    .catch(error => {
      console.log(error);
    });
};
