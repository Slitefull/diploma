import React from 'react'
import { Menu } from './menu/Menu'
import { Container } from '../../styled'
import { HeaderWrapper, Logo } from './styled'
import logo from '../../assets/logo.jpg'


export const Header = () => (
	<HeaderWrapper>
		<Container row>
			<Logo src={logo} />
			<Menu />
		</Container>
	</HeaderWrapper>
)