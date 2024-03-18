import React from 'react'
import NavigationApp from '../components/NavigationApp'
import { Outlet } from 'react-router-dom'

function MainContainer() {
  return (
    <>
      <NavigationApp />
      <Outlet />
    </>
  )
}

export default MainContainer