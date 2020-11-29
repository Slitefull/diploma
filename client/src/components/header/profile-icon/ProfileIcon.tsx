import React from 'react'
import { useSelector } from 'react-redux'
import defaultAvatar from '../../../assets/default-avatar.png'
import { authSelectors } from '../../../pages/login/selectors'
import { Container } from '../../../styled'
import { Avatar, UserName } from './styled'


export const ProfileIcon = () => {
	const userName = useSelector(authSelectors.getUserName)
	const userAvatar = useSelector(authSelectors.getUserAvatar)

	return (
		<Container row itemsCenter>
			<Avatar src={ userAvatar || defaultAvatar } />
			<UserName>{ userName }</UserName>
		</Container>
	)
}