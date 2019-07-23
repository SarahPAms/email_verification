import React from 'react';
import {connect} from 'react-redux';


class DetailVerification extends React.Component {

  render(){
    if (this.props.emailValidator === false) {
      return <div>Nice try, but that's not a valid email address</div>
    } else if (this.props.emailValidator === true) {
      return <div>Send away! </div>
    } else {
      return null
    }
    console.log(this.props.emailValidator)
  }
}

function mapStateToProps({emailValidator}) {
  return {emailValidator};
}

export default connect(mapStateToProps)(DetailVerification)
