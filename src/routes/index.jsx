import { Routes, Route } from 'react-router-dom';
import Books from '../pages/books/Books';
import Categories from '../pages/categories/Categories';

const routes = () => (
  <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/books" element={<Books />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
);

export default routes;
