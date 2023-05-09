import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  console.log('pending');
};
const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.erorr = payload.message;
  console.log('payload', payload);
  console.log('rejected');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    erorr: null,
  },
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.rejected]: handleReject,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.items = action.payload;
  //   },

  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.rejected]: handleReject,
  //   [deleteContact.fulfilled](state, action) {
  //     const newContacts = state.items.filter(
  //       item => item.id !== action.payload.id
  //     );
  //     state.items = newContacts;
  //   },

  //   [addContact.pending]: handlePending,
  //   [addContact.rejected]: handleReject,
  //   [addContact.fulfilled](state, action) {
  //     state.items = [...state.items, action.payload];
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const newContacts = state.items.filter(item => item.id !== payload.id);
        state.items = newContacts;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected', handleReject)),
});

export const contactsReducer = contactsSlice.reducer;
