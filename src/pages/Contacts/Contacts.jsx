import { Box, Heading, Text } from '@chakra-ui/react';
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
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box maxW={'500px'} p={'30px'}>
        <ContactForm onSubmit={onContactsFormSubmit} />
        {contacts.length !== 0 ? (
          <>
            <Heading mb={'10px'} size={'lg'}>
              Contacts
            </Heading>
            {contacts.length > 1 && <Filter onInput={onInput} />}
            <ContactList contacts={filteredContacts} />
          </>
        ) : (
          <Text fontSize={'20px'}>You have 0 contacts.</Text>
        )}
      </Box>
    </Box>
  );
};
