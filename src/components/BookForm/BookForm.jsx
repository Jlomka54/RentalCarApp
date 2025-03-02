import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { Form } from 'react-router-dom';
import css from './BookForm.module.css';
import { BookDateSchema } from '../../utils/formSchemas';

const BookForm = () => {
  const INITAL_VALUE = {
    name: '',
    email: '',
    bookDate: '',
    comment: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // dispatch(login(values));
    console.log('You rented a car');

    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={BookDateSchema}
    >
      <Form className={css.form}>
        <span>Email:</span>
        <Field className={css.input} type="text" name="email"></Field>
        <ErrorMessage className={css.errorMess} name="email" component="span" />
        <span>Password:</span>
        <Field className={css.input} type="password" name="password"></Field>
        <ErrorMessage
          className={css.errorMess}
          name="password"
          component="span"
        />

        <button className={css.button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookForm;
