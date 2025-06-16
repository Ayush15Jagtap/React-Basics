import React from 'react'
import { useState } from 'react';

function LoginLogout() {

    const [isLoggedIn,setLoggedIn]=useState(true);

    const handleLogin=()=>{
      return setLoggedIn(!isLoggedIn);
    }


  return (
    <div>
        {isLoggedIn?(<h2>Welcome Back User</h2>):(<h2>Please Login to continue</h2>)}
        {/* <button onClick={()=>setLoggedIn(!isLoggedIn)}>{isLoggedIn?'Logout':'Login'}</button> */}
        <button onClick={handleLogin}>
          {isLoggedIn?'Logout':'Login'}
        </button>
    </div>
  )
}

export default LoginLogout