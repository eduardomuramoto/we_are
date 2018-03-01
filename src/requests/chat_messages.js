import {BASE_URL} from './config_request';

function  getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`
}
// HTTP REQUESTS

export const ChatMessage = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/chat_messages`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.status === 200 ? res.json() : [])
  },
}
