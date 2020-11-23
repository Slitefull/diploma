import React from 'react'
import {reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux';
import {RegistrationForm} from './registration-form/RegistrationForm'
import {AlreadyHaveAccountWindow} from './already-have-account-window/AlreadyHaveAccountWindow'
import {Container} from '../../styled'
import {FormTitle, FormWrapper} from '../../components/common/form-control/styled'
import {registerActions} from './actions';


export const Registration = () => {
	const dispatch = useDispatch()
	const register = (data: any) => dispatch(registerActions.registerAdmin(data))

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