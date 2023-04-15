import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid/non-secure';

import { deleteContact } from '../../redux/contacts/contactsSlice';

import { List } from './Phonebook.styled';
import { ContactItem } from './Phonebook.styled';

export const ContactList = ({ contacts, onDelete }) => {
  let stringifyData = JSON.stringify(contacts);
  let data = JSON.parse(stringifyData);
  const dispatch = useDispatch();

  return (
    <List>
      {data.map(item => {
        console.log(item);
        return (
          <ContactItem key={item.id}>
            {item.name}: {item.number} {''}
            <button
              onClick={() => dispatch(deleteContact(item.id))}
              type="button"
              style={{ fontSize: 15 }}
            >
              Delete
            </button>
          </ContactItem>
        );
      })}
    </List>
  );
};
