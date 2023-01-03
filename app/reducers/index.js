import {combineReducers} from 'redux';
import selectList from './selectList';
import setLatLang from './setLatLang';
import coordinates from './coordinates';
import location_details from './loacationDetails';
import order from './order';

// import location_details from './loacationDetails'
import photo_url from './photpUrlFromMap';
import orderDetails from './order/OrderDetails';
import circuitInventory from './CircuitInventory';
import devicesInventory from './devicesInventory';
import carrierNumber from './CarrierNumber';
import ordersForTab from './orderFotTab';
import deviceAllData from './AllDevice';
import allDeviceDetails from './AllDevice/allDeviceDetails';
import allCircuit from './AllCircuit';
import allCircuitDetails from './AllCircuit/allCircuitDetails';
import allBranchID from './AllBranchID';
import allCircuitID from './AllCircuitID';
import allSiteID from './AllSiteID';
import allAssets from './Assets';
import CircuitDetailsExplore from './CircuitDetailsExplore';
import deviceDetailsExplore from './DeviceDetailsExplore';
import orderDetailsExplore from './OrderDetailsExplore';
import ordersType from './OrdersType';
import tangorNumber from './TangorNumber';
import siteNumber from './SiteNumber';
import allAtms from './ATMS';
import AtmsAssets from './AtmsAssets';
import AssetsAtmVendor from './AssetsAtmVendor';
import AssetsAtmType from './AssetsAtmType';
import AssetsAtmModel from './AssetsAtmModel';
import AssetsAtmATMID from './AssetsAtmATMID';
import AssetsAtmsDetails from './AssetsAtmsDetails';
import AtmsItem from './AtmsItem';
import CircuitsItems from './CircuitsItems';
import DevicesItems from './DevicesItems';
import MapType from './MapType';
import SiteItem from './SiteItem';
import LocationInfo from './LocationInfo';
import OrdersItem from './OrdersItem';
import Notes from './Notes';
import Contacts from './Contacts';
import ExploreSiteId from './ExploreSearch/ExploreSiteId';
import ExploreAtmId from './ExploreSearch/ExploreAtmId';
import ExploreBranchId from './ExploreSearch/ExploreBranchId';
import ExploreCircuitId from './ExploreSearch/ExploreCircuitId';
import ExploreDeviceId from './ExploreSearch/ExploreDeviceId';
import ExploreAddress from './ExploreSearch/ExploreAddress';
import SiteTypeCheck from './SiteTypeCheck';
import GenealogyList from './GenealogyList';

const rootReducer = combineReducers({
  setLatLang,
  selectList,
  coordinates,
  location_details,
  photo_url,
  order,
  orderDetails,
  circuitInventory,
  devicesInventory,
  carrierNumber,
  ordersForTab,
  deviceAllData,
  allDeviceDetails,
  allCircuit,
  allCircuitDetails,
  allBranchID,
  allCircuitID,
  allSiteID,
  allAssets,
  CircuitDetailsExplore,
  deviceDetailsExplore,
  orderDetailsExplore,
  ordersType,
  tangorNumber,
  siteNumber,
  allAtms,
  AtmsAssets,
  AssetsAtmVendor,
  AssetsAtmType,
  AssetsAtmModel,
  AssetsAtmATMID,
  AssetsAtmsDetails,
  CircuitsItems,
  AtmsItem,
  DevicesItems,
  MapType,
  SiteItem,
  LocationInfo,
  OrdersItem,
  Notes,
  ExploreSiteId,
  ExploreAtmId,
  ExploreBranchId,
  ExploreCircuitId,
  ExploreDeviceId,
  ExploreAddress,
  Contacts,
  SiteTypeCheck,
  GenealogyList,
});
export default rootReducer;
