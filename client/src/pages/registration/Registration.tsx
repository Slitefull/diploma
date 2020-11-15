import React from 'react'
import {Title} from '../../variables'
import {reduxForm} from 'redux-form'
import {RegistrationForm} from './registration-form/RegistrationForm'


export const Registration = () => (
	<>
		<Title>Registration Page</Title>
		<RegistrationReduxForm/>
	</>
)

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm)