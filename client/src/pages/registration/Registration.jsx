import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { authActions } from '../login/store'
import { RegistrationForm } from './registration-form/RegistrationForm'
import { InfoWindow } from '../../components/common/info-window/InfoWindow'

import { FormTitle, FormWrapper } from '../../components/common/form-control/styled'
import { Container, Link } from '../../styled'


export const Registration = () => {
  const dispatch = useDispatch()
  const register = data => dispatch(authActions.register(data))

  return (
    <Container alignCenter>
      <FormTitle>Registration Page</FormTitle>
      <FormWrapper>
        <RegistrationReduxForm onSubmit={register}/>
        <InfoWindow>Already have an account? <Link to={'/login'}>Login</Link></InfoWindow>
      </FormWrapper>
    </Container>
  )
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)
