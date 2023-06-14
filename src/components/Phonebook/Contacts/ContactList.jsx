import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid/non-secure';

import { deleteContact } from '../../../redux/contacts/operations';

import { List } from '../Phonebook.styled';
import { ContactItem } from '../Phonebook.styled';

export const ContactList = ({ contacts }) => {
  let stringifyData = JSON.stringify(contacts);
  let data = JSON.parse(stringifyData);
  const dispatch = useDispatch();

  return (
    <List>
      {data.map(item => {
        return (
          <ContactItem key={item._id}>
            {item.name}: {item.phone} {''}
            <button
              onClick={() => dispatch(deleteContact(item._id))}
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
