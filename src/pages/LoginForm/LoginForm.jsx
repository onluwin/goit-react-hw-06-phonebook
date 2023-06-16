import { Button, Input, Box } from '@chakra-ui/react';

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
                Login
              </Button>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};
