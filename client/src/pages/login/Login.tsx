import React from 'react'
import {Title} from '../../variables'
import {reduxForm} from 'redux-form'
import {LoginForm} from './login-form/LoginForm'

export const Login = () => (
	<>
		<Title>Login Page</Title>
		<LoginReduxForm/>
	</>
)

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)