import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';
import { toast } from 'react-hot-toast';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: true,
  isLoading: false,
};

const authSlice = createSlice(
  {
    name: 'auth',
    initialState: initialState,
    extraReducers: {
      [register.pending](state) {
        state.isLoading = true;
      },
      [register.fulfilled]() {
        toast.success('Вы успешно создали новый аккаунт', {
          position: 'bottom-right',
        });
      },

      [login.pending](state) {
        state.isLoading = true;
      },
      [login.fulfilled](state, { payload }) {
        state.user = { ...payload.user };
        state.isLoggedIn = true;
        state.token = payload.token;
        toast.success('Вы успешно вошли в аккаунт', {
          position: 'bottom-right',
        });
      },

      [logout.pending](state) {
        state.isLoading = true;
      },
      [logout.fulfilled](state) {
        state.isLoggedIn = false;
        state.user = { ...initialState.user };
        state.token = null;
        toast.success('Вы успешно вышли из аккаунта', {
          position: 'bottom-right',
        });
      },

      [refreshUser.pending](state) {
        state.isFetchingCurrentUser = true;
      },
      [refreshUser.fulfilled](state, { payload }) {
        state.user = { ...payload };
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        toast.success(`Welcome back, ${state.user.email}`, {
          position: 'bottom-right',
        });
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
