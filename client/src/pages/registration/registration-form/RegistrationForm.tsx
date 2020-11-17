import React from 'react';
import {useSelector} from 'react-redux';
import {getIsLoading} from '../../../app/app-selectors';
import {Input} from '../../../components/common/form-control/form-controls';
import {maxLengthCreator, required} from '../../../helpers/validators/validators';
import {Button} from '../../../styled';
import {Form, FormField, FormLabel} from '../../../components/common/form-control/styled';


const maxLength15 = maxLengthCreator(15)

export const RegistrationForm = (props: any) => {
	const loading = useSelector(getIsLoading)

	return (
		<Form onSubmit={props.handleSubmit}>
			<FormLabel htmlFor={'name'}>Name</FormLabel>
			<FormField
				name={'name'}
				component={Input}
				validate={[maxLength15, required]}
			/>
			<FormLabel htmlFor={'surname'}>Surname</FormLabel>
			<FormField
				name={'surname'}
				component={Input}
				validate={[maxLength15, required]}
			/>
			<FormLabel htmlFor={'email'}>Email</FormLabel>
			<FormField
				name={'email'}
				component={Input}
				validate={[required]}
			/>
			<FormLabel htmlFor={'password'}>Password</FormLabel>
			<FormField
				name={'password'}
				type={'password'}
				component={Input}
				validate={[maxLength15, required]}
			/>
			<Button fullWidth>{
				loading
					? 'Loading...'
					: 'Register'
			}</Button>
		</Form>
	)
}