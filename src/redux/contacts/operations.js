import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64557560f803f34576432cad.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  console.log(data);
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
    const { data } = await axios.post('/contacts', newContact);
    return data;
  }
);
