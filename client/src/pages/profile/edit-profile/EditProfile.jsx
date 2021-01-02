import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { profileActions } from '../store'
import { EditProfileForm } from './EditProfileReduxForm/EditProfileReduxForm'

import { FormTitle, FormWrapper } from '../../../components/common/form-control/styled'


export const EditProfile = () => {
  const dispatch = useDispatch()
  const saveProfileSettings = data => dispatch(profileActions.saveProfileSettings({data}))

  return (
    <>
      <FormTitle>Edit Profile</FormTitle>
      <FormWrapper>
        <EditProfileReduxForm onSubmit={saveProfileSettings}/>
      </FormWrapper>
    </>
  )
}

const EditProfileReduxForm = reduxForm({form: 'editProfile'})(EditProfileForm)