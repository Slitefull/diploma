import React from 'react'
import {Title, Wrapper} from '../../variables'
import {reduxForm} from 'redux-form'
import {RegistrationForm} from './registration-form/RegistrationForm'


export const Registration = () => (
	<Wrapper>
		<Title>Registration Page</Title>
		<RegistrationReduxForm/>
	</Wrapper>
)

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm)