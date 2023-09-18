import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducer";
import favouritesReducer from "../reducer/favouritesReducer";
import jobsReducer from "../reducer/jobsReducer";
import searchReducer from "../reducer/searchReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  favourites: favouritesReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
