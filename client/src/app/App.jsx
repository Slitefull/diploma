import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appActions } from './store'
import { authSelectors } from '../pages/login/selectors'
import { useRoutes } from '../hooks/useRoutes'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'


export const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(authSelectors.getIsAuth)
  const routes = useRoutes(isAuth)

  useEffect(() => { dispatch(appActions.setInit()) }, [dispatch])

  return (
    <>
      <Header/>
        {routes}
      <Footer/>
    </>
  )
}