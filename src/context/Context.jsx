import React, {createContext, useEffect, useState } from 'react'
import { getProfile } from '../Api/api';
import { useParams } from "react-router-dom";

export let UserContext=createContext();

const Context = ({children}) => {
  const [userAccounts,setuserAccounts]=useState([]);

   // fetch users from an API
  useEffect(() => {
    getProfile().then(val=>{setuserAccounts(val.data.users)}).catch((err) => console.log(err));
  }, []);


  // return selected user from home page. To be used in other components
  const GetUser=()=>{
    const {userId}= useParams();
    const selectedUser = userAccounts[userId - 1];
    return selectedUser;
  }

  const value = {
    userAccounts,
    GetUser,
  };


  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default Context