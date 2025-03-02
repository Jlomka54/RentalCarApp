import React from 'react';
import CarDetails from '../../components/CarDetails/CarDetails';
import Container from '../../components/ui/Container/Container';
import BookForm from '../../components/BookForm/BookForm';

const CarDetailsPage = () => {
  return (
    <Container>
      <CarDetails />
      <BookForm />
    </Container>
  );
};

export default CarDetailsPage;
