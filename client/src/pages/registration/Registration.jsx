import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { authActions } from '../login/store'
import { RegistrationForm } from './registration-form/RegistrationForm'

import { FormTitle, FormWrapper } from '../../components/common/form-control/styled'
import { Container } from '../../styled'


export const Registration = () => {
  const dispatch = useDispatch()
  const register = data => dispatch(authActions.register(data))

  return (
    <Container alignCenter>
      <FormTitle>Registration Page</FormTitle>
      <FormWrapper>
        <RegistrationReduxForm onSubmit={register}/>
      </FormWrapper>
    </Container>
  )
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)
