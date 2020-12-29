import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { appActions } from './store'
import { pages } from '../consts'
import { Header } from '../components/header/Header'
import { Catalog } from '../pages/catalog/Catalog'
import { Login } from '../pages/login/Login'
import { Registration } from '../pages/registration/Registration'
import { Footer } from '../components/footer/Footer'


export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(appActions.setInit()) }, [])

  return (
    <>
      <Header/>
      <Route path={pages.catalog.link} component={Catalog}/>
      <Route path={pages.login.link} component={Login}/>
      <Route path={pages.registration.link} component={Registration}/>
      <Footer/>
    </>
  )
}