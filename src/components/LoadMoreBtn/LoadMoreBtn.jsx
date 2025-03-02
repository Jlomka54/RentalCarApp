import React from 'react';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMoreCar }) => {
  return (
    <button onClick={loadMoreCar} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
