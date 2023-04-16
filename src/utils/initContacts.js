export const getContacts = () => {
  try {
    const contacts = localStorage.getItem('persist:contacts');
    const parsedData = JSON.parse(contacts);
    const parsedContacts = JSON.parse(parsedData.contacts);

    if (parsedContacts.length !== 0) {
      // console.log('parsedContacts ===>', parsedContacts);
      return parsedContacts;
    }
  } catch (error) {
    // console.log(error);
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};
