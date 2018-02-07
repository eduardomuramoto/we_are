import {BASE_URL} from './config_request';

function  getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`
}
// HTTP REQUESTS

export const User = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/users`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.status === 200 ? res.json() : [])
  },
  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/users/${id}`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  },
  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/users`,
      {
        method: 'POST',
        headers: {
          'Authorization': getJwt(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },
  update (id, params) {
    return fetch(
      `${BASE_URL}/api/v1/users/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': getJwt(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },
  destroy (id) {
    return fetch(
      `${BASE_URL}/api/v1/users/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  }
}
