import './App.css';
import React, { Component } from 'react';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';


export default class App extends Component {
  state = {
    contacts: [],
  };

  // handleInputChange = e => {
  //   // console.log(e.currentTarget.value);
  //   // console.log(e.currentTarget.name);
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

  formSubmitHandler = data => {
    console.log(data.name);
    console.log(data.number);
    const contact = {
      id: nanoid(10),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </div>
    );
  }
}
