import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import PrdctShow from './PrdctShow'
// import UsersShow from './UsersShow'
// import UserInfo from './UserInfo'

export default function Home() {
  return (
    <MainLayout>

    <div>
      {/* <UsersShow className={"col-end-2"}/>
      <UserInfo className={"col-start-2 col-end-5"} /> */}
      {/* <Link to="/">Go Home</Link><br/> */}
      <Link to="/users">Show Users</Link>
       <PrdctShow />
    </div>
      </MainLayout>
  )
}
