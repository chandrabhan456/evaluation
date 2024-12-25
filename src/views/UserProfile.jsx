import React from 'react';

import { AiOutlineLogout } from "react-icons/ai";
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Login from "../views/Login";
const UserProfile = () => {
  const {login1,setlogin1, currentColor,handleClick,initialState  } = useStateContext();
  const navigate = useNavigate();

  function handlelogout(){
   
      handleClick(initialState)
      setlogin1(false)
      localStorage.clear()
      navigate('/')
    
  };
  return (
    <div className="nav-item absolute right top-10 bg-[#f8f9fa] p-4 rounded-lg w-48 ml-12" style={{border:'2px solid #D3D3D3'}}>
      <div className="flex ">
      <CgProfile className="text-black text-xl mt-1" />
        <p className=" text-xl text-[#353839] ml-2">User Profile</p>
       
      </div>
      <div className="mt-1 flex">
         <AiOutlineLogout className="text-black text-xl mt-1" />
        <button
          style={{borderRadius:'10px',marginLeft:'10px'}}
          className={` text-xl text-[#353839] hover:drop-shadow-xl `}
          onClick={handlelogout}
        >Logout</button>
      </div>
       
     
     
    </div>

  );
};

export default UserProfile;