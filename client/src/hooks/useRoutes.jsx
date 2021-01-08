import React from 'react'
import { Route } from 'react-router-dom'
import { pagesLinks } from '../consts'
import { Catalog } from '../pages/catalog/Catalog'
import { Login } from '../pages/login/Login'
import { Registration } from '../pages/registration/Registration'
import { EditProfile } from '../pages/profile/edit-profile/EditProfile'
import { Profile } from '../pages/profile/Profile'


export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Route path={pagesLinks.catalog} component={Catalog}/>
        <Route path={pagesLinks.profile} component={Profile}/>
        <Route path={pagesLinks.settings} component={EditProfile}/>
      </>
    )
  }

  return (
    <>
      <Route path={pagesLinks.login} component={Login}/>
      <Route path={pagesLinks.registration} component={Registration}/>
    </>
  )
}
