import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const INITIAL_STATE = {
  sideIsOpen: false,
};

const sideBar = createSlice({
  name: 'toggleSide',
  initialState: INITIAL_STATE,
  reducers: {
    toggleSide: (state, action) => {
      state.sideIsOpen = !state.sideIsOpen;
    },
  },
});

export const { toggleSide } = sideBar.actions;
export { sideBar };
