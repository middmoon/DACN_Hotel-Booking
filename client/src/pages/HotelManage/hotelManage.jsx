import "./hotelManage.css"
import { useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import React, { useState } from 'react';
const HotelManage = () => {

const isLoggedIn = useSelector((useState) => useState.auth.login.currentUser)

if (!isLoggedIn) return <Navigate to={"/lg"} replace = { true} />
 return(
<div>
  <Outlet />
</div>
 )
}

export default HotelManage



