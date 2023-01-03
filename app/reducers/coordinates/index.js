import {
  SITE_STATUS_COORDINATES,
  SEARCH_BY_SITE_ID,
  SEARCH_BY_BRANCH_ID,
  FILTER_BY_ACTIVE,
  FILTER_BY_ALL,
  FILTER_BY_INACTIVE,
} from '../../actions/action.coordinate.type';
import {
  GET_COORDINATES,
  MARKER_IS_SELECTED,
  FILTER_MULTI_SITE_TYPE,
} from '../../actions/action.type';
import {
  CHANGE_BORDER,
  FILTER_MARKER,
  CHANGE_BORDER_FILTER,
} from '../../actions/actionType/action.Coordinatefilter.type';
import {dataMar} from '../../utils/MarkerData1';

const initialState = {
  coordinates: [],
  coordinates1: [],
  error: null,
  latt: 0,
  lngg: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES:
      let data1 = action.payload.data.map(item => {
        return {...item, isChecked: false};
      });
      // console.log(data1, 'data1');
      return {
        ...state,
        coordinates: data1,
        coordinates1: data1,
        latt: action.payload.lat,
        lngg: action.payload.lng,
        error: null,
      };
    //==============SEARCH
    case SEARCH_BY_SITE_ID:
      // console.log(action.data, 'action.data');
      const searchData = [...state.coordinates1];
      if (action.data) {
        const newData1 = searchData.filter(function (item) {
          const itemData = item?.Location_ID.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          coordinates: newData1,
        };
      } else {
        return {
          ...state,
          coordinates: state.coordinates1,
        };
      }
    case SEARCH_BY_BRANCH_ID:
      // console.log(action.data, 'action.data');
      const searchData1 = [...state.coordinates1];
      if (action.data) {
        const newData1 = searchData1.filter(function (item) {
          const itemData = item?.Branch_ID.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          coordinates: newData1,
        };
      } else {
        return {
          ...state,
          coordinates: state.coordinates1,
        };
      }
    //==============SEARCH
    case SITE_STATUS_COORDINATES:
      let data = action.payload.data.map(item => {
        return {...item, isChecked: false};
      });
      // console.log(data1, 'data1');
      return {
        ...state,
        coordinates: data,
        latt: action.payload.lat,
        lngg: action.payload.lng,
        error: null,
      };
    //==========
    // case MARKER_IS_SELECTED:
    //   let coord1 = [...state.coordinates1];

    //   const dataa = (coord1[action.data].isChecked = true);

    //   return {
    //     ...state,
    //     coordinates: dataa,
    //   };
    case FILTER_MARKER:
      // let marker = state.coordinates.map(item => {
      //   let itm = {...item, isChecked: false};
      //   return itm;
      // });
      // marker[action.payload.id].isChecked = true;
      let coord = [...state.coordinates1];

      const fdata = coord.filter(function (item) {
        return (
          item.HierarchyLocationType.toLowerCase() ===
          action.payload.HierarchyLocationType.toLowerCase()
        );
      });

      return {
        ...state,
        coordinates: fdata,
        latt: 0,
        lngg: 0,
        error: null,
      };
    //==============FILTER BY ACTIOVE
    case FILTER_BY_ACTIVE:
      // let marker = state.coordinates.map(item => {
      //   let itm = {...item, isChecked: false};
      //   return itm;
      // });
      // marker[action.payload.id].isChecked = true;
      let adata = [...state.coordinates1];

      const afdata = adata.filter(item => item.LocationStatusDesc === 'Active');

      return {
        ...state,
        coordinates: afdata,
        latt: 0,
        lngg: 0,
        error: null,
      };
    case FILTER_BY_INACTIVE:
      let iadata = [...state.coordinates1];

      const iafdata = iadata.filter(
        item => item.LocationStatusDesc === 'Inactive',
      );

      return {
        ...state,
        coordinates: iafdata,
        latt: 0,
        lngg: 0,
        error: null,
      };
    case FILTER_BY_ALL:
      let alldata = [...state.coordinates1];

      return {
        ...state,
        coordinates: alldata,
        latt: 0,
        lngg: 0,
        error: null,
      };
    case CHANGE_BORDER:
      let dd = dataMar.map((item, i) => {
        return {...item, isChecked: false};
      });

      dd[action.data].isChecked = true;
      return {
        ...state,
        coordinates: dd,
      };
    case CHANGE_BORDER_FILTER:
      return {
        ...state,
        coordinates: action.data,
      };
    case FILTER_MULTI_SITE_TYPE:
      // console.log(action);
      const filterByVendor = [...state.coordinates1];
      const result11 = filterByVendor.filter(item => {
        return action.data.find(i => {
          return i.name === item.HierarchyLocationType;
        });
      });

      console.log(result11.length, 'result11');
    default:
      return state;
  }
};
