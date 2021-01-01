import React from 'react'
import logo from '../../assets/logo.jpg'
import { Menu } from './menu/Menu'

import { Container } from '../../styled'
import { HeaderWrapper, Logo } from './styled'


export const Header = () => (
  <HeaderWrapper>
    <Container row>
      <Logo src={logo}/>
      <Menu/>
    </Container>
  </HeaderWrapper>
)