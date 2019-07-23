import { CHECK_VALIDITY } from '../actions/checkEmailValidity'


export default (state = '', {type, payload } = {}) => {
  switch (type){
    case CHECK_VALIDITY:
      return payload.data.isValid

    default:
      return state
  }
}
