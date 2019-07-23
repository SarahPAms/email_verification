import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {verifyEmail} from '../actions/checkEmailValidity'

export class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: ''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onEmailSubmit = this.onEmailSubmit.bind(this)
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({email: event.target.value})
  }

  onEmailSubmit(event) {
    event.preventDefault();

    this.props.verifyEmail(this.state.email);
    this.setState({email:''})
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

function mapDispatchtoProps(dispatch){
  return bindActionCreators ({verifyEmail}, dispatch);
}
export default connect(null, mapDispatchtoProps)(EmailInput)
