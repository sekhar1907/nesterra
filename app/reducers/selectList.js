import {
  LOAD_LIST,
  SELECT_ALL,
  CLEAR_ALL,
  IS_SELECTED,
  SEARCH_CLEAR,
} from '../actions/action.type';

const initialState = {
  checked: false,
  list: [],
  data1: [],
  checkList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST:
      // console.log('first');
      return {
        ...state,
        checked: false,
        list: [
          {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
          {id: 1, txt: 'Office', name: 'Office', isChecked: false},
          {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
          {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
          {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
          {id: 5, txt: 'Other', name: 'Other', isChecked: false},
        ],
        data1: [
          {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
          {id: 1, txt: 'Office', name: 'Office', isChecked: false},
          {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
          {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
          {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
          {id: 5, txt: 'Other', name: 'Other', isChecked: false},
        ],
        checkList: [],
      };
    case SEARCH_CLEAR:
      const dataSearch = [...state.data1];
      // console.log(dataSearch);
      // console.log('dataSearch', dataSearch);
      const ddddddd = [
        {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
        {id: 1, txt: 'Office', name: 'Office', isChecked: false},
        {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
        {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
        {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
        {id: 5, txt: 'Other', name: 'Other', isChecked: false},
      ];
      return {
        ...state,
        list: [
          {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
          {id: 1, txt: 'Office', name: 'Office', isChecked: false},
          {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
          {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
          {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
          {id: 5, txt: 'Other', name: 'Other', isChecked: false},
        ],
        checkList: ddddddd.filter(item => item.isChecked),
      };
    // case SELECT_ALL:
    //   let data = action.payload.data.map(item => {
    //     return {...item, isChecked: true};
    //   });
    //   const listdata = data.filter(item => item.isChecked);
    //   return {
    //     ...state,
    //     checked: true,
    //     list: data,
    //     checkList: listdata,
    //   };
    // case CLEAR_ALL:
    //   let data1 = action.payload.data.map(item => {
    //     return {...item, isChecked: false};
    //   });
    //   return {
    //     ...state,
    //     checked: false,
    //     list: data1,
    //     checkList: [],
    //   };
    case IS_SELECTED:
      // const item=[...state]
      let d = state.list.map(item => {
        if (action.payload.id === item.id) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });
      // let checkData;
      // const seletedData = d.filter(item => item.isChecked);
      // if (seletedData.length == state.list.length) {
      //   checkData = true;
      // } else {
      //   checkData = false;
      // }
      return {
        ...state,
        checked: d,
        list: d,
        data1: state.data1,
        checkList: d.filter(item => item.isChecked),
      };
    default:
      return state;
  }
};
