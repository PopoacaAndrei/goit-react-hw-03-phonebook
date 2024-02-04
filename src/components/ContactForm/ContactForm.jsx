import { nanoid } from 'nanoid';
import PT from 'prop-types';
import { Component } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';

import { FormBtn, FormInput, FormTitle } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const data = { id: nanoid(), name: name, number: number };
    this.props.createNewContact(data);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          <FormTitle>Name</FormTitle>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </label>

        <label>
          <FormTitle>Phone number</FormTitle>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onInputChange}
          />
        </label>

        <FormBtn type="submit">
          <BsFillPersonPlusFill
            style={{
              marginRight: 30,
              width: 30,
              height: 30,
            }}
          />
          Add contact
        </FormBtn>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  createNewContact: PT.func.isRequired,
};
