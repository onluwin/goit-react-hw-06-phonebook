import { Box, Button, Input } from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const SignupForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const onSubmit = async (values, actions) => {
    dispatch(register(values));
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
                Sign up
              </Button>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};
