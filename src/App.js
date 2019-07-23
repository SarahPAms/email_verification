import React from 'react';
import './App.css';
import  EmailInput  from './containers/emailInput'
import  DetailVerification from './containers/verificationDetail'

function App() {
  return (
    <div className="App">
      <EmailInput/>
      <DetailVerification/>
    </div>
  );
}

export default App;
