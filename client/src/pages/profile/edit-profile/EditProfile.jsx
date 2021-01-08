import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { profileActions } from '../store'
import { EditProfileForm } from './EditProfileForm/EditProfileForm'
import { MakeAdminForm } from './MakeAdminForm/MakeAdminForm'

import { FormTitle, FormWrapper } from '../../../components/common/form-control/styled'
import { RemoveAdminForm } from './RemoveAdminForm/RemoveAdminForm'


export const EditProfile = () => {
  const dispatch = useDispatch()
  const saveProfileSettings = data => dispatch(profileActions.saveProfileSettings({ data }))

  return (
    <>
      <FormTitle>Settings</FormTitle>
      <FormWrapper>
        <EditProfileReduxForm onSubmit={saveProfileSettings}/>
        <MakeAdminForm />
        <RemoveAdminForm />
      </FormWrapper>
    </>
  )
}

const EditProfileReduxForm = reduxForm({ form: 'editProfile' })(EditProfileForm)
