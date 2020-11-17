import React from 'react'
import { Menu } from './menu/Menu'
import { Wrapper } from '../../variables'
import { HeaderWrapper } from './styled'


export const Header = () => (
	<HeaderWrapper>
		<Wrapper>
			<Menu />
		</Wrapper>
	</HeaderWrapper>
)