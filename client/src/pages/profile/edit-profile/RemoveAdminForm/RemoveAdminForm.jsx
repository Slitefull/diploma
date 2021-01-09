import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions } from '../../store'
import { profileSelectors } from '../../selectors'
import { userRoles } from '../../../../helpers/getRole'
import { Option } from 'antd/es/mentions'
import { Select } from 'antd'

import { Button, Wrapper } from '../../../../styled'
import { FormTitle } from '../../../../components/common/form-control/styled'


export const RemoveAdminForm = () => {
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState('')

  const users = useSelector(profileSelectors.getAllUsers)
  const admins = users.filter(user => user.role === userRoles.admin)

  const onChangeHandler = value => setSelectedUser(value)
  const removeAdminHandler = () => dispatch(profileActions.removeAdmin(selectedUser))

  return (
    <>
      <FormTitle>Remove Admin</FormTitle>
        <Wrapper>
          <Select
            showSearch
            style={{width: 200}}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChangeHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {admins.map(admin => <Option key={admin._id} value={admin._id}>{admin.email}</Option>)}
          </Select>
          <Button
            disabled={!Boolean(selectedUser)}
            withoutMargin
            onClick={removeAdminHandler}
          >
            Confirm
          </Button>
        </Wrapper>
    </>
  )
}
