import { combineReducers } from "redux";
import UserReducers from "./UserReducers";
import ShopReducers from "./ShopReducers";
import ItemReducers from "./ItemReducers";

const rootReducer = combineReducers({
  UserReducers,
  ShopReducers,
  ItemReducers,
});

export default rootReducer;
