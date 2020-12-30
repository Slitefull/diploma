import React from 'react'
import {useDispatch} from 'react-redux'
import {reduxForm} from 'redux-form'
import {LoginForm} from './login-form/LoginForm'
import {InfoWindow} from '../../components/common/info-window/InfoWindow'
import {authActions} from "./store";
import {Container, Link} from '../../styled'
import {FormTitle, FormWrapper} from '../../components/common/form-control/styled'


export const Login = () => {
  const dispatch = useDispatch()
  const login = data => dispatch(authActions.loginAdmin(data))

  return (
    <Container alignCenter>
      <FormTitle>Sign in</FormTitle>
      <FormWrapper>
        <LoginReduxForm onSubmit={login}/>
        <InfoWindow>New to Diploma?<Link to={'/registration'}> Create an account.</Link></InfoWindow>
      </FormWrapper>
    </Container>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)