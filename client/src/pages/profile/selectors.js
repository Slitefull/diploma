import { createSelector } from 'reselect'

const profileState = state => state.profile

export const profileSelectors = {
  getUserName: createSelector(profileState, profile => profile.name),
  getUserEmail: createSelector(profileState, profile => profile.email),
  getUserAvatar: createSelector(profileState, profile => profile.avatar)
}