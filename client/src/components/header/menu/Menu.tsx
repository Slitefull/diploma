import React from 'react';
import {NavLink} from 'react-router-dom';
import {MenuWrapper} from './styled';
import {pages} from '../../../consts'

export const Menu = () => (
	<MenuWrapper>
		<NavLink to={pages.catalog.link}>{pages.catalog.title}</NavLink>
		<NavLink to={pages.login.link}>{pages.login.title}</NavLink>
		<NavLink to={pages.registration.link}>{pages.registration.title}</NavLink>
	</MenuWrapper>
)