import React from 'react';
import css from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
  return (
    <div className={css.hero}>
      <Hero />
    </div>
  );
};

export default HomePage;
