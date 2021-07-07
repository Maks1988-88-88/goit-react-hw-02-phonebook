import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  handleInputChange = e => {
    // console.log(e.currentTarget.value);
    // console.log(e.currentTarget.name);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    // const { onSubmit } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          //   required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          //   title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          //   required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <button>Add contact</button>
      </form>
    );
  }
}
