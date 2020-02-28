import { combineReducers } from '@reduxjs/toolkit';
import { togglePopUp } from '../slices/popupMenu';
import { sideBar } from '../slices/sideBar';
const rootReducer = combineReducers({
  togglePopUp: togglePopUp.reducer,
  toggleSide: sideBar.reducer,
});

export default rootReducer;
