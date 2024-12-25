import React, { useEffect, useState } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from "react-icons/md";
import avatar from '../data/avatar.jpg';
import { Link, NavLink, useNavigate,Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Setting, OpenAI,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { MdKeyboardArrowRight } from "react-icons/md";
import nttlogo from '../data/nttdatalogo.svg';
import {usrNavigate} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";

import { MdOutlineWbSunny } from "react-icons/md";
import "./navbar.css"
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
 
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 "
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
 
);

const Navbar = () => {
  const { activeMenu,setActiveMenu,mainPage,setMainPage,initialState,handleClick,isClicked,currentMode,setCurrentMode,configurationSettings} = useStateContext();
  console.log("ok",initialState,isClicked)
 const menitem = activeMenu
 console.log("main page",activeMenu)
 if(activeMenu == 'false')
 {
  setActiveMenu(false)
 }
  useEffect(() => { 
    localStorage.setItem("openAI_Configuration",activeMenu)
  })
  
    setMainPage(false)
  
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const navigate = useNavigate()
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <div className='flex justify-between md:mx-0 relative w-full'  > 
  
    <div className='flex'><img
          style={{width:"250px",marginLeft:"-15px"}}
          src={nttlogo}
          alt="nttlogo"
        />
        <div className='mt-4 ml-2 text-3xl'>Gen AI Core India</div>
    </div>
    

      <div className='absolute inline-flex rounded-full h-2 w-2 right-60 top-2' > 
     {(activeMenu) &&
      <NavButton title="Chat" customFunc={() => handleClick('setting')}
    
      color={ currentMode == 'Light'  ? 'black' : 'black'}  icon={<FiSettings />} />}
      {!(activeMenu) &&  <NavButton title="Chat" customFunc={() => {setMainPage(true);setActiveMenu(true)}}
    
    color={ currentMode == 'Light'  ? 'black' : 'black'}  icon={<IoHomeOutline />} />}
      <NavButton title="Notification" customFunc={() => handleClick('notification')}
       
      color={ currentMode == 'Light'  ? 'black' : 'black'}  icon={<MdOutlineWbSunny />} />
       
          <div
             className="img items-center mt-4 gap-2  "
             onClick={() => handleClick('userProfile')}
          >

            <img
              className="img rounded-full w-8 h-8 mt-1 "
              src={avatar}
              alt="user-profile"
            />
            <p className='whitespace-nowrap flex mt-2'>
              <span className="text-black-400 text-14 text-black dark:text-black"  >Hi,</span>{' '}
              <span className="flex text-black-400 font-bold ml-1 text-14 text-black dark:text-black"  >
                Michael
              {!(isClicked.userProfile) &&  <MdKeyboardArrowDown className="text-black text-14 mt-1" />}
              {(isClicked.userProfile) &&  <MdKeyboardArrowUp className="text-black text-14 mt-1" onClick={() => handleClick('userProfile')}/>}
             
              </span>
            </p>
          
          </div>
          {mainPage && <Navigate replace={true} to='/' />}
           {isClicked.setting && <Setting /> } 
           {isClicked.userProfile && (<UserProfile />)}
           
           

      </div>
    </div>
    <div style={{
      width: '100%',
      height: '1px',
      backgroundColor: '#D3D3D3',
    }} />
    </div>
  );
};

export default Navbar;
