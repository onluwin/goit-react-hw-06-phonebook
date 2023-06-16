import { Button, Input, Box, Spinner } from '@chakra-ui/react';

import { Field, Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
import { selectIsAuthLoading } from 'redux/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);

  const initialValues = { email: '', password: '' };

  const onSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} mt={'25px'}>
        <Box maxW={{ base: '250px', md: '450px', lg: '500px' }}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <label>
                Email
                <Field as={Input} name="email" />
              </label>
              <label>
                Password
                <Field as={Input} name="password" />
              </label>
              <Button
                colorScheme="blue"
                mt={'15px'}
                width={'100%'}
                type="submit"
              >
                {isLoading ? <Spinner /> : 'Login'}
              </Button>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};
