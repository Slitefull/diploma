import { instance } from '../../api/api'

export const catalogApi = {
  getAllGoods: () => instance.get(`goods/goods`)
}