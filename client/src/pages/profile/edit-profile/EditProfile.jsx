import React from 'react'
import { reduxForm } from 'redux-form'
import { EditProfileForm } from './EditProfileReduxForm/EditProfileReduxForm'

import { FormTitle, FormWrapper } from '../../../components/common/form-control/styled'


export const EditProfile = () => {
  const saveProfileSettings = data => {
    console.log(data)
  }

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