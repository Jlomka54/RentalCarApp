import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCarsLoading,
  selectSelectedCar,
} from '../../redux/cars/selectors';
import { apiGetCarsById } from '../../redux/cars/operation';

import css from './CarDetails.module.css';

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const carInfo = useSelector(selectSelectedCar);
  const loading = useSelector(selectCarsLoading);

  useEffect(() => {
    const getCarById = async () => {
      await dispatch(apiGetCarsById(id));
    };
    getCarById();
  }, [dispatch, id]);
  if (loading) return <p>Loading...</p>;
  return (
    carInfo !== null && (
      <div className={css.carDetails}>
        <img
          className={css.carImg}
          src={`${carInfo.img}`}
          alt={`${carInfo.brand} ${carInfo.model}`}
        />
        <div className={css.carInfo}>
          <div className={css.carNameBlock}>
            <h3 className={css.carName}>
              {carInfo.brand} {carInfo.model}, {carInfo.year}
            </h3>
            {/* <span className={css.carId}>id:{carInfo.id}</span> */}
          </div>
          <div className={css.location}>
            <p>{carInfo.address.split(',').slice(-2).join(', ')}</p>
            <p>
              Mileage:{' '}
              {carInfo.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              km
            </p>
          </div>
          <span className={css.price}>${carInfo.rentalPrice}</span>
          <p className={css.description}>{carInfo.description}</p>
          <h4 className={css.title}>Rental Conditions: </h4>
          <ul className={css.list}>
            {carInfo.rentalConditions.map(condition => {
              return <li>{condition}</li>;
            })}
          </ul>
          <h4 className={css.title}>Car Specifications:</h4>
          <div className={css.someInfo}>
            <p>Year: {carInfo.year}</p>
            <p>Type: {carInfo.type}</p>
            <p>Fuel Consumption: {carInfo.fuelConsumption}</p>
            <p>Engine Size: {carInfo.engineSize}</p>
          </div>
          <h4 className={css.title}>Accessories and functionalities:</h4>
          <ul className={css.list}>
            {[...carInfo.accessories, ...carInfo.functionalities].map(
              condition => {
                return <li>{condition}</li>;
              }
            )}
          </ul>
        </div>
      </div>
    )
  );
};

export default CarDetails;
