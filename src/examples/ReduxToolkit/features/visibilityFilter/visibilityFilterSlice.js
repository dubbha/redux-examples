import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 'SHOW_ALL' };

export const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  }
});

// action creators are generated for each case reducer function
export const { set } = visibilityFilterSlice.actions;

// reducer default export
export default visibilityFilterSlice.reducer;

// selectors
export const selectVisibilityFilter = state => state.visibilityFilter.value;
