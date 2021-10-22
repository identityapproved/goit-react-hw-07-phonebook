import { ContactsListItem } from 'Components/ContactsListItem/ContactsListItem';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactsList.styled';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import contactsActions from 'redux/contacts/contacts-actions';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const removeContact = id => dispatch(contactsActions.removeContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          remove={() => removeContact(id)}
        />
      ))}
    </List>
  );
};
