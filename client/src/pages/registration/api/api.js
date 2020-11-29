import { instance } from '../../../api/api'

export const registerAPI = {
  register: data => instance.post(`auth/register`, data)
}