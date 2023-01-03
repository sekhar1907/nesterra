import Axios from 'axios';
import {Base_url} from '../../key';
import {
  ALL_ATMS,
  ATMS_ALL_BRANCH_ID,
  ATMS_ALL_MODEL,
  ATMS_ALL_SITE_ID,
  ATMS_ALL_TYPE,
  ATMS_ALL_VENDOR,
  ATMS_ALL_ATM_ID,
  ATMS_ALL_DETAILS,
} from './../actionType/AtmsAssets/index';

export const GetAllAtmNumber = setLoder => dispatch => {
  // console.log(name);
  setLoder(true);
  Axios.get(
    `${Base_url}/api/GetAllCustomATM?atmid=0&model=0&vendor=0&siteid&type=0&branchid=0`,
  )
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length, '[dfds');
        setLoder(false);
        dispatch({
          type: ALL_ATMS,
          payload: {
            data: response.data,
          },
        });
      } else {
        setLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const GetAllAtmSiteId = setLoder => dispatch => {
  // console.log(name);
  setLoder(true);
  Axios.get(`${Base_url}/api/GetAtmVendorsList`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length, '[dfds');
        setLoder(false);
        dispatch({
          type: ALL_ATMS,
          payload: {
            data: response.data,
          },
        });
      } else {
        setLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const GetAllAtmVendor = setBottomSheetLoder => dispatch => {
  // console.log(name);
  setBottomSheetLoder(true);
  Axios.get(`${Base_url}/api/GetAtmVendorsList`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length, '[dfds');
        setBottomSheetLoder(false);
        dispatch({
          type: ATMS_ALL_VENDOR,
          payload: {
            data: response.data,
          },
        });
      } else {
        setBottomSheetLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const GetAllAtmType = setBottomSheetLoder => dispatch => {
  // console.log(name);
  setBottomSheetLoder(true);
  Axios.get(`${Base_url}/api/getatmtypelist`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length, 'type');
        setBottomSheetLoder(false);
        dispatch({
          type: ATMS_ALL_TYPE,
          payload: {
            data: response.data,
          },
        });
      } else {
        setBottomSheetLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const GetAllAtmModel = setBottomSheetLoder => dispatch => {
  // console.log(name);
  setBottomSheetLoder(true);
  Axios.get(`${Base_url}/api/GetAtmModelsList`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length);
        setBottomSheetLoder(false);
        dispatch({
          type: ATMS_ALL_MODEL,
          payload: {
            data: response.data,
          },
        });
      } else {
        setBottomSheetLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const GetAllAtmAtmId = setBottomSheetLoder => dispatch => {
  // console.log(name);
  setBottomSheetLoder(true);
  Axios.get(`${Base_url}/api/GetAtmIds`)
    .then(response => {
      if (response.data.length > 0) {
        // console.log(response.data.length, 'AAAA');
        setBottomSheetLoder(false);
        dispatch({
          type: ATMS_ALL_ATM_ID,
          payload: {
            data: response.data,
          },
        });
      } else {
        setBottomSheetLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
//===============ATM DETAILS
export const GetAllAtmdETAILS = (id, setDetailsLoder) => dispatch => {
  // console.log(name);
  setDetailsLoder(true);
  Axios.get(`${Base_url}/api//GetAllATMDetailsByATMId?atmid=${id}`)
    .then(response => {
      if (response.data.length > 0) {
        setDetailsLoder(false);
        dispatch({
          type: ATMS_ALL_DETAILS,
          payload: {
            data: response.data,
          },
        });
      } else {
        setDetailsLoder(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

//https://citizenmobileapi-dev.azurewebsites.net/api/getatmtypelist
//https://citizenmobileapi-dev.azurewebsites.net/api/GetAtmIds
//https://citizenmobileapi-dev.azurewebsites.net/api/GetAtmVendorsList
//https://citizenmobileapi-dev.azurewebsites.net/api/GetAtmModelsList
