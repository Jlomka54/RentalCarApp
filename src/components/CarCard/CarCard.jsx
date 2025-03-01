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
      <img src={img} alt={`${brand} ${model}`} />
      <h3>
        {brand} {model}, {year}
      </h3>
      <p>Country</p>
      <p>
        {type} | {mileage}
      </p>
      <button type="button">Read more</button>
    </li>
  );
};

export default CarCard;
