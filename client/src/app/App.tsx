import React from 'react';
import {Route} from 'react-router-dom';
import {pages} from '../consts';
import {Footer} from '../components/footer/Footer';
import {Header} from '../components/header/Header';
import {Wrapper} from '../variables';
import {Catalog} from '../pages/catalog/Catalog';
import {Login} from '../pages/login/Login';
import {Registration} from '../pages/registration/Registration';

export const App = () => (
	<Wrapper>
		<Header/>
		<Route path={pages.catalog.link} component={Catalog}/>
		<Route path={pages.login.link} component={Login}/>
		<Route path={pages.registration.link} component={Registration}/>
		<Footer/>
	</Wrapper>
)