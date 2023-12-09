/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: 'english',
  },
  reducers: {
    updateLanguage(state, action) {
      state.currentLanguage = action.payload;
    },
  },
});
export default languageSlice;
