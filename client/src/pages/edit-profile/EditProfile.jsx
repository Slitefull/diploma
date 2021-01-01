import React from 'react'
import { reduxForm } from 'redux-form'
import { EditProfileForm } from './EditProfileReduxForm/EditProfileReduxForm'

import { Container } from '../../styled'
import { FormTitle, FormWrapper } from '../../components/common/form-control/styled'


export const EditProfile = () => {
  const saveProfileSettings = data => {
    console.log(data)
  }

  return (
    <Container>
      <FormTitle>Edit Profile</FormTitle>
      <FormWrapper>
        <EditProfileReduxForm onSubmit={saveProfileSettings}/>
      </FormWrapper>
    </Container>
  )
}

const EditProfileReduxForm = reduxForm({form: 'editProfile'})(EditProfileForm)