import { Routes, Route } from 'react-router-dom';
import MissionsPage from '../pages/missions/missions';
import ProfilePage from '../pages/profile/Profile';
import Rockets from '../pages/rockets/Rockets';

const routes = () => (
  <Routes>
    <Route path="/" element={<Rockets />} />
    <Route path="/missions" element={<MissionsPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default routes;
