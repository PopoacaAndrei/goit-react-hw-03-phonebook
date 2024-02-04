import { Component } from 'react';

import { ContactForm, ContactList, Filter, Section } from '../components';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    if (contactList) this.setState({ contacts: contactList });
  }
  componentDidUpdate(prevStates) {
    if (prevStates.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createNewContact = data => {
    const normalizeFilter = data.name.toLowerCase();
    const stateNameArray = this.state.contacts.map(({ name }) =>
      name.toLowerCase()
    );

    !stateNameArray.includes(normalizeFilter)
      ? this.setState({ contacts: [...this.state.contacts, data] })
      : alert(`${data.name} is already in contacts.`);
  };

  deleteContact = contactId => {
    this.setState(prevStates => ({
      contacts: prevStates.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContact = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const findContact = this.findContact();
    return (
      <AppStyled>
        <Section title="Phonebook">
          <ContactForm createNewContact={this.createNewContact} />
        </Section>

        <Section title="Contacts">
          <Filter filterValue={filter} onChange={this.onFilterChange} />
          <ContactList
            contacts={findContact}
            deleteContact={this.deleteContact}
          />
        </Section>
      </AppStyled>
    );
  }
}
