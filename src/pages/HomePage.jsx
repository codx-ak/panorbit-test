import React, { useContext, useState } from 'react'
import SideMenu from '../components/SideMenu'
import Navbar from '../components/Navbar'
import Chat from '../components/Chats'
import { UserContext } from '../context/Context'
import { Outlet } from 'react-router-dom'
import '../style/homepage.css'
import '../style/chats.css'
import '../style/navbar.css'
import '../style/profile.css'


const HomePage = () => {
  const { GetUser, userAccounts } = useContext(UserContext);
  const selectedUser = GetUser();

 let [pageTitle,setPageTitle]=useState("Profile")

  return ( 
    <div className="home_page">
      <SideMenu setPageTitle={setPageTitle}/>
      <div className='user_container'>
          <Navbar selectedUser={selectedUser} pageTitle={pageTitle}/>
          <div className="profile_details">

            {/*  User Pages */}
            <Outlet context={selectedUser}/>
            
          </div>
          <Chat userAccounts={userAccounts} selectedUser={selectedUser} />
      </div>
    </div>
  )
}

export default HomePage