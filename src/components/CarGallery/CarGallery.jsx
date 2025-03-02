import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarsData,
  selectCarsLoading,
  selectTotalCars,
} from '../../redux/cars/selectors';
import { apiGetCars } from '../../redux/cars/operation';

import css from './CarGallery.module.css';
import CarCard from '../../components/CarCard/CarCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const CarGallery = () => {
  const dispatch = useDispatch();
  const carList = useSelector(selectCarsData);
  const loading = useSelector(selectCarsLoading);
  const totalCars = useSelector(selectTotalCars);

  const [page, setPage] = useState(1);
  const handleLoadMoreCar = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(apiGetCars(page));
    };

    fetchData();
  }, [dispatch, page]);

  useEffect(() => {
    const scrollToMiddle = () => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight / 2,
        behavior: 'smooth',
      });
    };

    if (!loading && carList) {
      scrollToMiddle();
    }
  }, [carList, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className={css.card}>
        {carList &&
          carList.cars &&
          carList.cars.map(
            ({
              id,
              year,
              brand,
              model,
              img,
              rentalPrice,
              rentalCompany,
              address,
              type,
              mileage,
            }) => (
              <CarCard
                key={id}
                img={img}
                brand={brand}
                model={model}
                rentalPrice={rentalPrice}
                id={id}
                year={year}
                rentalCompany={rentalCompany}
                address={address}
                type={type}
                mileage={mileage}
              />
            )
          )}
      </ul>
      {carList.cars.length < totalCars && (
        <LoadMoreBtn loadMoreCar={handleLoadMoreCar} />
      )}
    </>
  );
};

export default CarGallery;
