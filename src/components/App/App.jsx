import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../page/HomePage/HomePage';
import CatalogPage from '../../page/CatalogPage/CatalogPage';
import CarDetailsPage from '../../page/CatDetailsPage/CarDetailsPage';
import { Suspense } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
