import './App.css';
import { Route, Routes } from 'react-router-dom';

import Container from '../ui/Container/Container';
import HeaderPage from '../../page/HeaderPage/HeaderPage';
import HomePage from '../../page/HomePage/HomePage';
import CatalogPage from '../../page/CatalogPage/CatalogPage';
import CarDetailsPage from '../../page/CatDetailsPage/CarDetailsPage';
import NotFoundPage from '../../page/NotFoundPage/NotFoundPage';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Container>
        <HeaderPage />
      </Container>
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
