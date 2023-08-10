import { Routes, Route } from 'react-router-dom';
import MissionsPage from '../pages/missions/missions';
import ProfilePage from '../pages/profile/Profile';

const routes = () => (
  <Routes>
    <Route path="/missions" element={<MissionsPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default routes;
