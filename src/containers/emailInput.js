import React, { Component } from 'react';
const axios = require('axios');

export class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: ''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onEmailSubmit = this.onEmailSubmit.bind(this)
  }

  verifyEmail(email) {
      return axios.get("https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/" + email,
        {
          'headers': {
          'X-RapidAPI-Host': 'pozzad-email-validator.p.rapidapi.com',
          'X-RapidAPI-Key': '34778c0d9cmsh497a2d0f5e0dd95p19578ajsnaa3ad20bdf58'
        }
      })
      .then((response) => console.log(response))
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({email: event.target.value})
  }

  onEmailSubmit(event) {
    event.preventDefault();

    this.verifyEmail(this.state.email);
  }



  render() {
    return (
      <form onSubmit={this.onEmailSubmit} className="input-group">
        <input
          placeholder="Enter an email to verify"
          className="form-control"
          value={this.state.email}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Enter</button>
        </span>
      </form>
    )
  }
}
