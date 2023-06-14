import { useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  selectFilteredContacts,
  selectIsFetchingCurrentUser,
} from '../redux/selectors';
import { updateFilter } from '../redux/filter/filterSlice';
import { addContact } from 'redux/contacts/operations';
import { refreshUser } from 'redux/auth/operations';
import { Header } from './Phonebook/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from 'pages/LoginForm/LoginForm';
import { NotFound } from 'pages/NotFound';
import { Contacts } from 'pages/Contacts/Contacts';
import { SignupForm } from 'pages/SignupForm/SignupForm';
import { Home } from 'pages/Home/Home';
import { PrivateRoute } from 'Utils/PrivateRoute';
import { PublicRoute } from 'Utils/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  let filteredContacts = useSelector(selectFilteredContacts);

  const onContactsSubmit = (values, { resetForm }) => {
    const inContacts = contacts.some(item => {
      return (
        item.phone === values.phone || item.name.toLowerCase() === values.name
      );
    });

    if (inContacts) {
      return alert('Type another name or number');
    }
    dispatch(addContact({ ...values }));

    resetForm();
  };
  const onFilterInput = e => {
    const input = e.currentTarget.value;
    dispatch(updateFilter(input));
  };

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/login"
              element={
                <PublicRoute redirectTo={'/contacts'} restricted>
                  <LoginForm />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute redirectTo={'/contacts'} restricted>
                  <SignupForm />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo={'/login'}>
                  <Contacts
                    filteredContacts={filteredContacts}
                    contacts={contacts}
                    onContactsFormSubmit={onContactsSubmit}
                    onInput={onFilterInput}
                  />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};
