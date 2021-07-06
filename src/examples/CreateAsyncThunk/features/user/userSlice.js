import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (uid, thunkAPI) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        return response.json()
      })
  }
);

const initialState = {
  entity: {},
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.isLoading = true;
      state.error = false;
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log(action);
      state.error = action.error.message;
      state.isLoading = false;
    });
  }
});

export default userSlice.reducer;

