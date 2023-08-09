/* eslint-disable linebreak-style */
import { Routes, Route } from 'react-router-dom';
import HomeView from '../pages/HomeView';
import ProfileView from '../pages/ProfileView';

const routes = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/rockets" element={<HomeView />} />
      <Route path="/missions" element={<HomeView />} />
      <Route path="/profile" element={<ProfileView />} />
    </Routes>
  </div>
);

export default routes;
