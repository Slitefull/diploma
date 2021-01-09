import { instance } from '../../api/api'

export const profileApi = {
  getAllUsers: () => instance.get(`user/users`),
  saveProfileSettings: data => instance.put(`user/profile`, data),
  makeAdmin: userId => instance.post(`user/makeAdmin`, { userId }),
  removeAdmin: userId => instance.delete(`user/removeAdmin`, { data: { userId } })
}