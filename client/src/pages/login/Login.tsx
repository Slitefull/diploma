import React from 'react'
import {Title, Wrapper} from '../../variables'
import {reduxForm} from 'redux-form'
import {LoginForm} from './login-form/LoginForm'


export const Login = () => (
	<Wrapper>
		<Title>Login Page</Title>
		<LoginReduxForm/>
	</Wrapper>
)

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)