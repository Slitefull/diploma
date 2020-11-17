import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../../../components/common/form-control/form-controls';
import {Button} from '../../../variables';
import {authAPI} from '../../../api/api';


export const RegistrationForm = (props: any) => (
	<form onSubmit={props.handleSubmit}>
		<Field
			name={'name'}
			placeholder={'Name'}
			component={Input}
		/>
		<Field
			name={'surname'}
			placeholder={'surname'}
			component={Input}
		/>
		<Field
			name={'email'}
			placeholder={'Email'}
			component={Input}
		/>
		<Field
			name={'password'}
			placeholder={'password'}
			component={Input}
			type={'password'}
		/>
		<Button onClick={() => authAPI.register({email: 'aleksandrkr@wizardsdev.com', password: 'ilovedildoverymatch'})}>Register</Button>
	</form>
)