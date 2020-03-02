import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  popUpIsOpen: false,
};

const togglePopUp = createSlice({
  name: 'popUp',
  initialState: INITIAL_STATE,
  reducers: {
    toggle: (state, action) => {
      state.popUpIsOpen = !state.popUpIsOpen;
    },
  },
});

export const { toggle } = togglePopUp.actions;
export { togglePopUp };
