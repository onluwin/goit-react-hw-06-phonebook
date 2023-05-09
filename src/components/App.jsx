import { useEffect } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { Filter } from './Phonebook/Filter';
import { ContactList } from './Phonebook/ContactList';

import { Wrapper, Title } from './Phonebook/Phonebook.styled';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  // selectIsLoading,
  // selectContactsError,
  selectFilteredContacts,
} from '../redux/selectors';
import { updateFilter } from '../redux/filter/filterSlice';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import axios from 'axios';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
    const x = async () => {
      const { ip } = await axios.get('https://ipapi.co/json/');
      console.log('ip', ip);
      return ip;
    };
    x();
  }, [dispatch]);

  let filteredContacts = useSelector(selectFilteredContacts);

  const onSubmit = (values, { resetForm }) => {
    const inContacts = contacts.some(
      item =>
        item.number === values.number || item.name.toLowerCase() === values.name
    );

    if (inContacts) {
      return alert('Type another name or number');
    }
    dispatch(addContact({ ...values }));

    resetForm();
  };
  const onInput = e => {
    const input = e.currentTarget.value;
    dispatch(updateFilter(input));
  };
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmit} />

      {contacts.length !== 0 ? (
        <>
          <h2 style={{ marginBottom: 10 }}>Contacts</h2>
          <Filter onInput={onInput} />
          <ContactList contacts={filteredContacts} />
        </>
      ) : (
        <h3>You have 0 contacts.</h3>
      )}
    </Wrapper>
  );
};
