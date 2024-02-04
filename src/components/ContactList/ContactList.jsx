import PT from 'prop-types';

import { ContactListStyled } from './ContactList.styled';
import { ContactListItems } from './ContactListItems';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItems
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            contactId={id}
          />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PT.array.isRequired,
  deleteContact: PT.func.isRequired,
};
