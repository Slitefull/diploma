import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import { Menu } from 'antd'
import { useRoutesMenu } from '../../hooks/useRoutesMenu'

export const Sidebar = () => {
  const isAuth =
  const [collapse, setIsCollapse] = useState(false)

  const routes = useRoutesMenu()

  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          nav 1
        </Menu.Item>
        <Menu.Item key="2">
          nav 2
        </Menu.Item>
        <Menu.Item key="3">
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  )
}