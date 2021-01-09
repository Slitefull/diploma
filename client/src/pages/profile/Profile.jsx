import React from 'react'
import { Container } from '../../styled'
import { useSelector } from 'react-redux'
import { profileSelectors } from './selectors'
import { InfoPanel } from '../../components/common/info-panel/InfoPanel'
import { GeneralInfoPanel } from './general-info-panel/GeneralInfoPanel'


export const Profile = () => {
  const userName = useSelector(profileSelectors.getUserName)

  return (
    <>
      <InfoPanel>Welcome, {userName}</InfoPanel>
      <Container>
        <GeneralInfoPanel/>
      </Container>
    </>
  )
}