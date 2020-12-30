import React from 'react'
import {Route, Redirect} from "react-router-dom";
import {pages} from "../consts";
import {Catalog} from "../pages/catalog/Catalog";
import {Login} from "../pages/login/Login";
import {Registration} from "../pages/registration/Registration";


export const useRoutes = isAuth => {
  if (isAuth) return <Route path={pages.catalog.link} component={Catalog}/>

  return (
    <>
      <Route path={pages.login.link} component={Login}/>
      <Route path={pages.registration.link} component={Registration}/>
    </>
  )
}