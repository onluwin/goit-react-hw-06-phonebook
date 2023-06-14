import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <>
      <h3>Login form</h3>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};
