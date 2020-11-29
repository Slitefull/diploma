import { createSelector } from 'reselect'

const authState = state => state.auth

export const authSelectors = {
  getIsAuth: createSelector(authState, auth => auth.isAuth),
  getUserName: createSelector(authState, auth => auth.profile.userName),
  getUserEmail: createSelector(authState, auth => auth.profile.userEmail),
  getUserAvatar: createSelector(authState, auth => auth.profile.userAvatar)
}