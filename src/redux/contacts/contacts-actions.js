import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));

const removeContact = createAction('contact/remove');
const filterChange = createAction('contact/filterChange');

const contactsActions = { addContact, removeContact, filterChange };
export default contactsActions;
