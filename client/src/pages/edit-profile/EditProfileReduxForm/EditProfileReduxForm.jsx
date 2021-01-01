import React from 'react'
import { useSelector } from 'react-redux'
import { appSelectors } from '../../../app/selectors'
import { Input } from '../../../components/common/form-control/form-controls'
import { maxLengthCreator, required } from '../../../helpers/validators/validators'

import { Form, FormField, FormLabel } from '../../../components/common/form-control/styled'
import { Button, Preloader } from '../../../styled'


const maxLength15 = maxLengthCreator(15)

export const EditProfileForm = props => {
  const isLoading = useSelector(appSelectors.getIsLoading)

  return (
    <Form onSubmit={props.handleSubmit}>
      <FormLabel htmlFor={'name'}>Name</FormLabel>
      <FormField
        name={'name'}
        component={Input}
        validate={[maxLength15, required]}
      />
      <Button fullWidth>{
        isLoading
          ? <Preloader small/>
          : 'Save'
      }</Button>
    </Form>
  )
}