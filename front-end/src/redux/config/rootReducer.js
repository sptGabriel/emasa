import { combineReducers } from '@reduxjs/toolkit';
import { togglePopUp } from '../slices/popupMenu';
const rootReducer = combineReducers({
  togglePopUp: togglePopUp.reducer,
});

export default rootReducer;
