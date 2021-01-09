import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../selectors'
import Meta from 'antd/es/card/Meta'

import { Count, Wrapper } from '../../../styled'


export const GeneralInfoPanel = () => {
  const usersCount = useSelector(profileSelectors.getUsersCount)
  const adminsCount = useSelector(profileSelectors.getAdminsCount)

  return (
    <Wrapper>
      <Card
        hoverable
        style={{width: 240}}
        cover={<Count>{usersCount}</Count>}
      >
        <Meta title="Total regular users count" description="This is how many users on the site"/>
      </Card>
      <Card
        hoverable
        style={{width: 240}}
        cover={<Count>20</Count>}
      >
        <Meta title="Total goods count" description="This is how many goods on the site"/>
      </Card>
      <Card
        hoverable
        style={{width: 240}}
        cover={<Count>{0 || adminsCount}</Count>}
      >
        <Meta title="Total admins count" description="This is how many admins on the site"/>
      </Card>
    </Wrapper>
  )
}