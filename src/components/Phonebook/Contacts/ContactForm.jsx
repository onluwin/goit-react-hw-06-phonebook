import { Formik, Form } from 'formik';

import { InputName, InputTel } from '../Phonebook.styled';
import { Button, Heading, Input } from '@chakra-ui/react';

export const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', phone: '' };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        style={{
          width: 450,
          marginBottom: 20,
          padding: 10,
        }}
        autoComplete="off"
      >
        <Heading display={'flex'} justifyContent={'center'} mb={'10px'}>
          Add new contact
        </Heading>
        <p>Name</p>
        <InputName
          as={Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <InputTel
          as={Input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button width={'100%'} colorScheme="blue" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
