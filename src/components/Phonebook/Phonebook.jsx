import { useEffect, useMemo } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

import { Wrapper } from './Phonebook.styled';
import { Title } from './Phonebook.styled';
// import { getContacts } from 'utils/getContacts';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

import { getContacts, getFilter } from '../../redux/selectors';
import { addContact, deleteContact } from '../../redux/contacts/contactsSlice';
import { updateFilter } from 'redux/filter/filterSlice';
import { nanoid } from 'nanoid';

const lSKey = 'contacts-data-key';
export const Phonebook = () => {
  // const [contacts, setContacts] = useState(() => getContacts(lSKey));
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    localStorage.setItem(lSKey, JSON.stringify(contacts));
  }, [contacts]);

  let filteredContacts = useMemo(() => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const onSubmit = (values, { resetForm }) => {
    const inContacts = contacts.some(
      item =>
        item.number === values.number || item.name.toLowerCase() === values.name
    );

    if (inContacts) {
      return alert('Type another name or number');
    }
    // setContacts(prevState => {
    //   return [...prevState.map(item => item), values];
    // });
    dispatch(addContact({ ...values, id: nanoid() }));

    resetForm();
  };
  const onInput = e => {
    const input = e.currentTarget.value;
    // setFilter(input);
    dispatch(updateFilter(input));
  };
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmit} />

      {contacts.length !== 0 && (
        <>
          <h2 style={{ marginBottom: 10 }}>Contacts</h2>
          <Filter onInput={onInput} />
          <ContactList contacts={filteredContacts} />
        </>
      )}
    </Wrapper>
  );
};
