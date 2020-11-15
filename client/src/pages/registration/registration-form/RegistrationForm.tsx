import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../../../components/common/form-control/form-controls';


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
	</form>
)