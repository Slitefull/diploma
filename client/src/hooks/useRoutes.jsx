import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { pagesLinks } from '../consts'
import { Login } from '../pages/login/Login'
import { Registration } from '../pages/registration/Registration'


export const useRoutes = isAuth => {
  return (
    <>
      <Route path={pagesLinks.registration} component={Registration}/>
      <Route path={pagesLinks.login} component={Login}/>
      <Redirect to={'/login'}/>
    </>
  )
}
