import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status() {
      return 'Under construction';
    },
  },
});

export default categoriesSlice.reducer;
