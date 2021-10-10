import axios from 'axios'
export const fetchData = (apiUrl) => {
  return axios.get(apiUrl, {
    crossDomain: true,
  })
}
