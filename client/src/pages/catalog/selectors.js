import { createSelector } from 'reselect'

const goodsState = state => state.catalog

export const catalogSelectors = {
  getGoodsCount: createSelector(goodsState, state => state.goods.count)
}