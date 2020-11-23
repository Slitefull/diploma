import { instance } from '../../../api/api';

export const loginAPI = {
  login: data => instance.post('auth/login', data)
}