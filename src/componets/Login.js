import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignINForm, setSigninForm] = useState(true);

  const toggleSignInForm = ()=>{
    setSigninForm(!isSignINForm);
  }      
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt='BgImg' />

      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignINForm? "Sign In" :"Sign Up" }</h1>
         {
                !isSignINForm && <input
                className = "p-4 my-4 w-full bg-gray-700"
                type='text' placeholder='Enter Your Name'  />
         }
        <input
        className = "p-4 my-4 w-full bg-gray-700"
        type='text' placeholder='Email Address'  />

        <input
        
        type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignINForm? "Sign In" :"Sign Up" }</button>
        <p className='text-xl cursor-pointer   ' onClick={toggleSignInForm}>{isSignINForm? "New to Netflix? Sign Up Now" :"Already Registered? Sign In Now.." }</p>
      </form>
     
    </div>
  )
}

export default Login
