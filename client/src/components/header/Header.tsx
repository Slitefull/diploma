import React from 'react'
import logo from '../../assets/logo.jpg'
import { useSelector } from 'react-redux'
import { Menu } from './menu/Menu'
import { ProfileIcon } from './profile-icon/ProfileIcon'
import { authSelectors } from '../../pages/login/selectors'
import { Container } from '../../styled'
import { HeaderWrapper, Logo } from './styled'


export const Header = () => {
	const isAuth = useSelector(authSelectors.getIsAuth)

	return (
		<HeaderWrapper>
			<Container row>
				<Logo src={ logo }/>
				<Menu/>
				{ isAuth
					? <ProfileIcon />
					: null
				}
			</Container>
		</HeaderWrapper>
	)
}