import { Link } from 'react-router-dom';
import css from './CarCard.module.css';

const CarCard = ({
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
}) => {
  return (
    <li className={css.carInfo}>
      <img className={css.image} src={img} alt={`${brand} ${model}`} />
      <div className={css.namePrice}>
        <p className={css.carName}>
          {brand} <span className={css.model}>{model}</span>, {year}
        </p>
        <span>${rentalPrice}</span>
      </div>

      <div className={css.someDescription}>
        <p>
          {address.split(',').slice(-2).join(', ')} | {rentalCompany}
        </p>
        <p>
          {type} | {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} km
        </p>
      </div>
      <Link className={css.moreInfo} to={`/catalog/${id}`}>
        Read more
      </Link>
    </li>
  );
};

export default CarCard;
