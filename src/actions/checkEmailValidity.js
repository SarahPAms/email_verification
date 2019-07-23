const axios = require('axios');

const ROOT_URL = "https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/"
const HOST_URL = 'pozzad-email-validator.p.rapidapi.com'

export const CHECK_VALIDITY = "CHECK_VALIDITY"

export function verifyEmail(email) {
    const request = axios.get(`${ROOT_URL}${email}`,
      {
        'headers': {
        'X-RapidAPI-Host': HOST_URL,
        'X-RapidAPI-Key': '34778c0d9cmsh497a2d0f5e0dd95p19578ajsnaa3ad20bdf58'
      }
    })
    return {
      type: CHECK_VALIDITY,
      payload: request
    }
}
