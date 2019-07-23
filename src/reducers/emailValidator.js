import { CHECK_VALIDITY } from '../actions/checkEmailValidity'


export default (state = '', {type, payload } = {}) => {
  switch (type){
    case CHECK_VALIDITY:
      console.log(payload.data.isValid)
      return payload.data.isValid

    default:
      return state
  }
}
