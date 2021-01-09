import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../selectors'
import { catalogSelectors } from '../../catalog/selectors'
import Meta from 'antd/es/card/Meta'

import { Count, Wrapper } from '../../../styled'


export const GeneralInfoPanel = () => {
  const usersCount = useSelector(profileSelectors.getUsersCount)
  const adminsCount = useSelector(profileSelectors.getAdminsCount)
  const goodsCount = useSelector(catalogSelectors.getGoodsCount)
  const goodsOnStockCount = useSelector(catalogSelectors.getStockGoodsCount)

  return (
    <Wrapper>
      <Card hoverable cover={<Count>{usersCount}</Count>}>
        <Meta title="Total regular users count" description="This is how many users on the site"/>
      </Card>
      <Card hoverable cover={<Count>{goodsCount}</Count>}>
        <Meta title="Total goods count" description="This is how many goods on the site"/>
      </Card>
      <Card hoverable cover={<Count>{goodsOnStockCount}</Count>}>
        <Meta title="Total goods count on the stock" description="This is how many goods on the stock"/>
      </Card>
      <Card hoverable cover={<Count>{adminsCount}</Count>}>
        <Meta title="Total admins count" description="This is how many admins on the site"/>
      </Card>
    </Wrapper>
  )
}