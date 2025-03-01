import React from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={css.logo} to={'/'}>
      <p className={css.logoText}>
        Rental<span>Car</span>
      </p>
    </Link>
  );
};

export default Logo;
