import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};
const authSlice = createSlice(
  {
    name: 'auth',
    initialState: initialState,
    extraReducers: {
      [register.pending](state) {},
      [register.fulfilled](state, { payload }) {
        state.token = payload;
      },

      [login.pending]() {},
      [login.fulfilled](state, { payload }) {
        state.user = { ...payload.user };
        state.isLoggedIn = true;
        state.token = payload.token;
      },

      [logout.pending]() {},
      [logout.fulfilled](state, { payload }) {
        state.isLoggedIn = false;
        state.user = { ...initialState.user };
        state.token = null;
      },

      [refreshUser.pending](state) {
        state.isFetchingCurrentUser = true;
      },
      [refreshUser.fulfilled](state, { payload }) {
        console.log('refreshed user:', payload);
        state.user = { ...payload };
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      },
      [refreshUser.rejected](state) {
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      },
    },
  }
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
);

export const authReducer = authSlice.reducer;
