import React from "react";
import {NavLinkItem} from "../components/header/menu/styled";
import {pages} from "../consts";
import {authActions} from "../pages/login/store";
import {useDispatch} from "react-redux";
import {BiExit} from "react-icons/bi";
import {ProfileIcon} from "../components/header/profile-icon/ProfileIcon";


export const useRoutesMenu = isAuth => {
  const dispatch = useDispatch()

  if (isAuth) {
    return (
      <>
        <NavLinkItem to={pages.catalog.link}>{pages.catalog.title}</NavLinkItem>
        <ProfileIcon />
        <BiExit
          onClick={() => dispatch(authActions.logout())}
          style={{cursor: "pointer", height: 40, width: 40, color: "white"}}
        />
      </>
    )
  }

  return (
    <>
      <NavLinkItem to={pages.login.link}>{pages.login.title}</NavLinkItem>
      <NavLinkItem to={pages.registration.link}>{pages.registration.title}</NavLinkItem>
    </>
  )
}