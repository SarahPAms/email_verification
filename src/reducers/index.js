import { combineReducers } from 'redux'
import EmailValidator from './emailValidator'

const rootReducer = combineReducers({
  emailValidator: EmailValidator
});

export default rootReducer;
