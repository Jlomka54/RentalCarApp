import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import css from './BookForm.module.css';
import { BookDateSchema } from '../../utils/formSchemas';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const BookForm = () => {
  const INITAL_VALUE = {
    name: '',
    email: '',
    bookDate: '',
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    toast.success('You rented a car');

    actions.resetForm();
  };

  return (
    <>
      <ToastContainer />;
      <Formik
        initialValues={INITAL_VALUE}
        onSubmit={handleSubmit}
        validationSchema={BookDateSchema}
      >
        <Form className={css.form}>
          <p className={css.formName}>Book your car now</p>
          <p className={css.formDesc}>
            Stay connected! We are always ready to help you.
          </p>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage
            className={css.errorMess}
            name="name"
            component="span"
          />

          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage
            className={css.errorMess}
            name="email"
            component="span"
          />
          <Field
            className={css.input}
            type="text"
            name="bookDate"
            placeholder="Booking date"
          />
          <ErrorMessage
            className={css.errorMess}
            name="bookDate"
            component="span"
          />
          <Field
            className={css.input}
            type="text"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage
            className={css.errorMess}
            name="comment"
            component="span"
          />

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default BookForm;
