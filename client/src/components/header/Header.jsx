import React from 'react'
import logo from '../../assets/logo.jpg'

import { Container } from '../../styled'
import { HeaderWrapper, Logo } from './styled'


export const Header = () => {
  return (
    <HeaderWrapper>
      <Container row>
        <Logo src={logo}/>
      </Container>
    </HeaderWrapper>
  )
}