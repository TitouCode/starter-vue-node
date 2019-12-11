import axios from 'axios';

// TODO: import locale.js with baseURL to SERVER

/**
 * Creating an Axios instance for http instance and fetching to server
 */
export const HTTP = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    // Authorization: 'Bearer {token}'
  }
})

/**
 * 
 * @param {string} url 
 * @param {string} method Values: GET, POST, PUT, PATCH, DELETE
 * @param {object} params Plain Object
 * @param {object} data Plain Object
 */
export async function HTTPRequest (url = '', method = 'GET', params = {}, data = {}) {
  return await HTTP.request({
    url,
    method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer {token}'
    },
    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    params,
    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    data,
  })
}