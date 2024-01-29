import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, PROFILE } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect (() =>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const  {uid , email , displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between'>
      <img  className= "w-44" src={LOGO} alt='Logo' />
      {user && <div className='flex p-2 '>
        <img className='w-12 h-12' 
        alt='AVTAR' src={PROFILE} /> 
        <button onClick={handleSignOut} className='text-2xl text-slate-100 font-bold'>(Sign Out)</button>
'
      </div> 
      }
    </div>
  )
}

export default Header
