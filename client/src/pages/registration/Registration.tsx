import React from 'react'
import {reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux';
import {authAPI} from '../../api/api';
import {toggleLoading} from '../../app/app-reducer'
import {RegistrationForm} from './registration-form/RegistrationForm'
import {AlreadyHaveAccountWindow} from './already-have-account-window/AlreadyHaveAccountWindow';
import {Container} from '../../styled'
import {FormTitle, FormWrapper} from '../../components/common/form-control/styled'


export const Registration = () => {
	const dispatch = useDispatch()

	const register = (dataForm: any) => {
		dispatch(toggleLoading(true))
		authAPI.register(dataForm)
			.then((response: any) => {
				console.log(response)
			})
			.catch((error: any) => {
				console.log(error)
			})
			.finally(() => {
				dispatch(toggleLoading(false))
			})
	}

	return (
		<Container>
			<FormTitle>Registration Page</FormTitle>
			<FormWrapper>
				<RegistrationReduxForm onSubmit={register}/>
				<AlreadyHaveAccountWindow/>
			</FormWrapper>
		</Container>
	)
}

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm)