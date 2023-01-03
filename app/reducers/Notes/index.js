import {GET_NOTES} from '../../actions/actionType/Notes';
import moment from 'moment';

const initialState = {
  notes: [],
};
moment.suppressDeprecationWarnings = true;
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      const data = action.payload.data.map((item, i) => {
        let d = item.Created.split(' ')[0];
        return {...item, date: d};
      });
      const DATA = Object.values(
        data.reduce((acc, item) => {
          if (!acc[item.date])
            acc[item.date] = {
              title: item.date,
              data: [],
            };
          acc[item.date].data.push(item);
          return acc;
        }, {}),
      );
      // console.log(data);

      return {
        ...state,
        notes: DATA,
      };

    default:
      return state;
  }
};
