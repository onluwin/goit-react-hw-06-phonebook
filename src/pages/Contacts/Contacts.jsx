import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { ContactForm } from 'components/Phonebook/Contacts/ContactForm';
import { ContactList } from 'components/Phonebook/Contacts/ContactList';
import { Filter } from 'components/Phonebook/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsFetchingCurrentUser, selectIsLoading } from 'redux/selectors';

export const Contacts = ({
  filteredContacts,
  contacts,
  onContactsFormSubmit,
  onInput,
}) => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    if (isFetchingCurrentUser) {
      return;
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch, isFetchingCurrentUser]);

  console.log('isLoading', isLoading);
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box maxW={'500px'} p={'30px'}>
          <ContactForm onSubmit={onContactsFormSubmit} />
          {isLoading && <Spinner />}
          {contacts.length !== 0 ? (
            <>
              <Heading mb={'10px'} size={'lg'}>
                Contacts
              </Heading>
              {contacts.length > 1 && <Filter onInput={onInput} />}

              <ContactList contacts={filteredContacts} />
            </>
          ) : (
            !isLoading && <Text fontSize={'20px'}>You have 0 contacts.</Text>
          )}
        </Box>
      </Box>
    </>
  );
};
