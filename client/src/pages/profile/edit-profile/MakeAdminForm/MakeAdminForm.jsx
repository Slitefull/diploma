import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions } from '../../store'
import { profileSelectors } from '../../selectors'
import { Option } from 'antd/es/mentions'
import { Select } from 'antd'

import { Button, Wrapper } from '../../../../styled'
import { FormTitle } from '../../../../components/common/form-control/styled'


export const MakeAdminForm = () => {
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState('')

  const users = useSelector(profileSelectors.getAllUsers)

  const onChangeHandler = value => setSelectedUser(value)
  const makeAdminHandler = () => dispatch(profileActions.makeAdmin(selectedUser))

  return (
    <>
      <FormTitle>Make Admin</FormTitle>
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
            {users.map(user => <Option key={user._id} value={user._id}>{user.email}</Option>)}
          </Select>
          <Button
            disabled={!Boolean(selectedUser)}
            withoutMargin
            onClick={makeAdminHandler}
          >
            Confirm
          </Button>
        </Wrapper>
    </>
  )
}