import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from '../../utils/initContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: () => getContacts(),
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
