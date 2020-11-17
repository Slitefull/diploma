import * as axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
})

export const authAPI = {
  register: body => instance.post(`auth/register`, body)
}