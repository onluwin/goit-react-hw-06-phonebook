import { ContactForm } from 'components/Phonebook/Contacts/ContactForm';
import { ContactList } from 'components/Phonebook/Contacts/ContactList';
import { Filter } from 'components/Phonebook/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = ({
  filteredContacts,
  contacts,
  onContactsFormSubmit,
  onInput,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm onSubmit={onContactsFormSubmit} />
      {contacts.length !== 0 ? (
        <>
          <h2 style={{ marginBottom: 10 }}>Contacts</h2>
          <Filter onInput={onInput} />
          <ContactList contacts={filteredContacts} />
        </>
      ) : (
        <h3>You have 0 contacts.</h3>
      )}
    </>
  );
};
