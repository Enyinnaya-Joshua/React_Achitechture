import React from 'react'
import UserSideBar from '../../blocks/dashboardblock/UserSideBar'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div style={{display: "flex",
    alignItems:"center", backgroundColor: "silver", height:"100vh", width: "100%"}}>

<UserSideBar/>
<Outlet/>

    </div>
  )
}

export default DashBoardLayout