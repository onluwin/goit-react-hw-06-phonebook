import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(`/contacts`);
  console.log('data', data);
  return data;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    console.log('newContact', newContact);
    const { data } = await axios.post('/contacts', newContact);
    console.log('новый контакт - ', data);
    return data;
  }
);
