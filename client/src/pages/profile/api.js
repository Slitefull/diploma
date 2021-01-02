import { instance } from '../../api/api'

export const profileApi = {
  saveProfileSettings: data => instance.put(`user/profile`, data)
}