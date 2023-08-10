import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './feature/mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
  },
});

export default store;
