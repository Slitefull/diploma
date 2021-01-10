import React from 'react'
import { useSelector } from 'react-redux'
import { profileSelectors } from './selectors'
import { InfoPanel } from '../../components/common/info-panel/InfoPanel'
import { GeneralInfoPanel } from './general-info-panel/GeneralInfoPanel'
import { GoodsInfoPanel } from './goods-info-panel/GoodsInfoPanel'

import { Container } from '../../styled'


export const Profile = () => {
  const userName = useSelector(profileSelectors.getUserName)

  return (
    <>
      <InfoPanel>Welcome, {userName}</InfoPanel>
      <Container>
        <GeneralInfoPanel/>
        <GoodsInfoPanel/>
      </Container>
    </>
  )
}