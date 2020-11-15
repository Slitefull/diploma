import {Field} from 'redux-form';
import {Input} from '../../../components/common/form-control/form-controls';
import React from 'react';

export const LoginForm = (props: any) => (
	<form onSubmit={props.handleSubmit}>
		<Field
			name={'email'}
			component={Input}
			placeholder={'Email'}
		/>
		<Field
			name={'password'}
			component={Input}
			placeholder={'Password'}
			type={'password'}
		/>
	</form>
)