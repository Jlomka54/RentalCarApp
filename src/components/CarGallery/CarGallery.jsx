import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsData, selectCarsLoading } from '../../redux/cars/selectors';
import { apiGetCars } from '../../redux/cars/operation';
import CarCard from '../../components/CarCard/CarCard';

import css from './CarGallerry.module.css';

const CarGallery = () => {
  const dispatch = useDispatch();
  const carList = useSelector(selectCarsData);
  const loading = useSelector(selectCarsLoading);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(apiGetCars());
    };

    fetchData();
  }, [dispatch]);

  console.log('Car List:', carList);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
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
  );
};

export default CarGallery;
