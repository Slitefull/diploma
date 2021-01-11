import React from 'react'
import { useDispatch } from 'react-redux'
import { reduxForm } from 'redux-form'
import { LoginForm } from './login-form/LoginForm'
import { authActions } from './store';
import { Logo } from '../../styled'
import { AuthLink, FormTitle, FormWrapper } from '../../components/common/form-control/styled'
import logo from '../../assets/logo.svg'
import { LoginBackground } from './styled'
import { pagesLinks } from '../../consts'


export const Login = () => {
  const dispatch = useDispatch()
  const login = data => dispatch(authActions.login(data))

  return (
    <>
      <FormWrapper>
      <Logo src={logo} center/>
      <FormTitle>Login</FormTitle>
        <LoginReduxForm onSubmit={login}/>
        <AuthLink to={pagesLinks.registration}>Register account</AuthLink>
      </FormWrapper>
      <LoginBackground/>
    </>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)