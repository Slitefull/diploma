import React from 'react'
import {reduxForm} from 'redux-form'
import {LoginForm} from './login-form/LoginForm'
import {NewUserWindow} from './new-user-window/NewUserWindow'
import {Container} from '../../styled'
import {FormTitle, FormWrapper} from '../../components/common/form-control/styled'


export const Login = () => {
	const login = (formData:any) => {
		console.log(formData)
	}

	return (
	<Container>
		<FormTitle>Sign in</FormTitle>
		<FormWrapper>
			<LoginReduxForm onSubmit={login}/>
			<NewUserWindow/>
		</FormWrapper>
	</Container>
)}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)