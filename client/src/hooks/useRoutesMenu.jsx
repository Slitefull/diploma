import React from 'react'
import { pagesLinks, pagesTitles } from '../consts'
import { ProfileIcon } from '../components/header/profile-icon/ProfileIcon'
import { ProfileSettingsDropdown } from '../components/header/profile-settings-dropdown/ProfileSettingsDropdown'

import { NavLinkItem } from '../components/header/menu/styled'


export const useRoutesMenu = isAuth => {
  if (isAuth) {
    return (
      <>
        <NavLinkItem to={pagesLinks.catalog}>{pagesTitles.catalog}</NavLinkItem>
        <ProfileIcon/>
        <ProfileSettingsDropdown/>
      </>
    )
  }

  return (
    <>
      <NavLinkItem to={pagesLinks.login}>{pagesTitles.login}</NavLinkItem>
      <NavLinkItem to={pagesLinks.registration}>{pagesTitles.registration}</NavLinkItem>
    </>
  )
}