import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './feature/mission/missionSlice';
import rocketsSlice from './feature/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rockets: rocketsSlice,
  },
});

export default store;
