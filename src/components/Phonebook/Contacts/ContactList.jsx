import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contacts/operations';

import { List } from '../Phonebook.styled';
import { ContactItem } from '../Phonebook.styled';
import { Button, Text } from '@chakra-ui/react';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  let stringifyData = JSON.stringify(contacts);
  let data = JSON.parse(stringifyData);

  // &nbsp; = {' '}
  return (
    <List>
      {data.map(item => {
        return (
          <ContactItem
            key={item._id}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Text fontSize={'19px'}>
              {item.name}: {item.phone}&nbsp;
            </Text>
            <Button
              onClick={() => dispatch(deleteContact(item._id))}
              type="button"
              fontSize={'15px'}
              colorScheme="red"
            >
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </List>
  );
};
