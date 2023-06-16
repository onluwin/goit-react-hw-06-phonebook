export const selectUserEmail = state => state.auth.user.email;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  if (contacts.length > 0) {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
};

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectIsAuthLoading = state => state.auth.isLoading;
