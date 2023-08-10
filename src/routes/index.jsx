import { Routes, Route } from 'react-router-dom';
import MissionsPage from '../pages/missions/missions';

const routes = () => (
  <Routes>
    <Route path="/missions" element={<MissionsPage />} />
  </Routes>
);

export default routes;
