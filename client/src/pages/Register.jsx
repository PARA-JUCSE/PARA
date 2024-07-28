import React, { useState } from 'react'
import PostButton from '../components/PostButton';

const Register = ({signup}) => {
  const [isNewUser, setIsNewUser] = useState(signup);
  
  return (
    <div>
      {isNewUser ? 
        <>
          <div>
            <input type='text' placeholder='Enter Username'></input>
            <input type='text' placeholder='Enter Email'></input>
            <input type='text' placeholder='Enter Password'></input>
            <PostButton>Signup</PostButton>
          </div>
        </> 
        : 
        <>
          <div>
            <input type='text' placeholder='Enter Username'></input>
            <input type='text' placeholder='Enter Password'></input>
            <PostButton>Login</PostButton>
          </div>
        </>
      }
    </div>
  )
}

export default Register