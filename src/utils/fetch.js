import fetch from 'dva/fetch';
var defaultParams = {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
//错误捕获
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
/**
 * HTTP GET
 * @param  {string} url
 * @return {Promise}
 */
export function read(url) {
    return fetch(url, {
      ...defaultParams,
      method: 'get'
    }).then(checkStatus)
}
  
/**
 * HTTP POST
 * @param  {string} url
 * @param  {object} body
 * @return {Promise}
 */
export function create(url, body = {}) {
    return fetch(url, {
        ...defaultParams,
        method: 'post',
        body: JSON.stringify(body)
    }).then(response => response.json())
    .then(json => {return json});
}
  