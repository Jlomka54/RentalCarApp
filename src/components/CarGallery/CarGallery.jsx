import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsData, selectCarsLoading } from '../../redux/cars/selectors';
import { apiGetCars } from '../../redux/cars/operation';

import css from './CarGallery.module.css';
import CarCard from '../../components/CarCard/CarCard';

const CarGallery = ({ page }) => {
  const dispatch = useDispatch();
  const carList = useSelector(selectCarsData);
  const loading = useSelector(selectCarsLoading);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(apiGetCars(page));
    };

    fetchData();
  }, [dispatch, page]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className={css.card}>
        {carList !== null &&
          carList.map(
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
    </>
  );
};

export default CarGallery;
