import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { profileActions } from '../store'
import { EditProfileForm } from './EditProfileForm/EditProfileForm'
import { MakeAdminForm } from './MakeAdminForm/MakeAdminForm'
import { RemoveAdminForm } from './RemoveAdminForm/RemoveAdminForm'

import { Container } from '../../../styled'
import { FormTitle, FormWrapper } from '../../../components/common/form-control/styled'


export const EditProfile = () => {
  const dispatch = useDispatch()
  const saveProfileSettings = data => dispatch(profileActions.saveProfileSettings({ data }))

  return (
    <Container>
      <FormTitle>Settings</FormTitle>
      <FormWrapper>
        <EditProfileReduxForm onSubmit={saveProfileSettings}/>
        <MakeAdminForm />
        <RemoveAdminForm />
      </FormWrapper>
    </Container>
  )
}

const EditProfileReduxForm = reduxForm({ form: 'editProfile' })(EditProfileForm)
