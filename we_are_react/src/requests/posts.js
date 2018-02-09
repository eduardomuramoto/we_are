import {BASE_URL} from './config_request';

function  getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`
}
// HTTP REQUESTS

export const Post = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/posts`,
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
      `${BASE_URL}/api/v1/posts/${id}`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  },
  create (formData) {
    return fetch(
      `${BASE_URL}/posts`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Authorization': getJwt(),
          'Content-Type': 'multipart/form-data;'
        },
        body: formData
      }
    )
    .then(res => res.json());
  },
  update (id, params) {
    return fetch(
      `${BASE_URL}/api/v1/posts/${id}`,
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
      `${BASE_URL}/api/v1/posts/${id}`,
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
