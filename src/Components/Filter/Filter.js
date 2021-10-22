import { Input, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import contactsActions from 'redux/contacts/contacts-actions';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Filter:
      <Input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.filterChange(e.target.value))}
      />
    </Label>
  );
};
