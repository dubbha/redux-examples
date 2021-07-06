import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: '' };

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    reset: state => {
      state.value = initialState.value;
    }
  }
});

// action creators are generated for each case reducer function
export const { set, reset } = keywordSlice.actions;

// reducer default export
export default keywordSlice.reducer;

// selectors
export const selectKeyword = state => state.keyword.value;
