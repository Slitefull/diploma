import React from 'react'
import { Route } from 'react-router-dom'
import { pagesLinks } from '../consts'
import { Login } from '../pages/login/Login'
import { Registration } from '../pages/registration/Registration'
import { Main } from '../app/styled'
import { Redirect } from 'react-router-dom'


export const useRoutes = isAuth => {
  return (
    <Main>
      <Route path={pagesLinks.login} component={Login}/>
      <Route path={pagesLinks.registration} component={Registration}/>
      <Redirect to={'/login'} />
    </Main>
  )
}
