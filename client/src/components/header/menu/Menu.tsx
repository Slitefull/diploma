import React from 'react';
import {pages} from '../../../consts'
import {MenuWrapper, NavLinkItem} from './styled'


export const Menu = () => (
	<MenuWrapper>
		<NavLinkItem to={pages.catalog.link}>{pages.catalog.title}</NavLinkItem>
		<NavLinkItem to={pages.login.link}>{pages.login.title}</NavLinkItem>
		<NavLinkItem to={pages.registration.link}>{pages.registration.title}</NavLinkItem>
	</MenuWrapper>
)