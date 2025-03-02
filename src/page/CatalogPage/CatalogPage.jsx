import React, { useState } from 'react';
import CarGallery from '../../components/CarGallery/CarGallery';
import Container from '../../components/ui/Container/Container';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/cars/selectors';

const CatalogPage = () => {
  const currentPage = useSelector(selectCurrentPage);
  const [page, setPage] = useState(currentPage || 1);
  const handleLoadMoreCar = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <Container>
        <CarGallery page={page} />

        <LoadMoreBtn loadMoreCar={handleLoadMoreCar} />
      </Container>
    </div>
  );
};

export default CatalogPage;
