import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const SignupForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const onSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      <h3>Sign up form</h3>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label>
            Email
            <Field name="email" />
          </label>
          <label>
            Password
            <Field name="password" />
          </label>
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </>
  );
};
