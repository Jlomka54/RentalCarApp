import React from 'react';
import { Link } from 'react-router-dom';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.heroInfo}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.p}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className={css.catalogLink} to={'/catalog'}>
        View Catalog
      </Link>
    </div>
  );
};

export default Hero;
