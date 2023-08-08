import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    mission: {},
  },
});

export default store;
