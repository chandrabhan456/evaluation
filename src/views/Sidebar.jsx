import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineQueryStats, MdRotate90DegreesCcw, MdSchema } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineSchema } from "react-icons/md";
import { AiOutlineMenu } from 'react-icons/ai';
import { SiOpenai } from "react-icons/si";
import nttlogo from '../data/NTT-data-black-PNG.png';
import nttlogovertical from '../data/nttdatalogo.png';
import { useStateContext } from '../contexts/ContextProvider';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const Sidebar = () => {
  console.log("SSS")
  const {activeMenu, setActiveMenu } = useStateContext();
  console.log(activeMenu)
  
  const activeLink = 'flex items-center pt-3 pb-2.5 rounded-lg  text-white w-56 bg-[#414A6D] text-md ';
  const normalLink = 'flex items-center pt-3 pb-2.5 rounded-lg text-md text text-gray-200 hover:text-black hover:bg-grey ';

  return (
    <div className=' bg-main-bg  h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className="flex justify-betweenitems-center" >
          <img
          style={{color:'white'}}
          src={nttlogo}
          alt="nttlogo"
        />
    
     
      </div>
      <div>
        <div className='mt-3'>
      <span className='text-2xl  text-[#F7F7FF]' style={{marginLeft:'50px'}}>TextToSql</span>
      <button ></button>
      </div>
      <div className='ml-2'>
        <div  className='mt-7 '>
      <NavLink
                    to='/queryGenerator'
                    key='queryGenerator'
                   
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <MdOutlineQueryStats style={{height:"25px",width:"25px",color:"white"}} />
                    <span className="capitalize text-white ml-2">Query Generator</span>
                    
                  </NavLink>
                  </div>
                  <div className='mt-0 '>
                  <NavLink
                    to='/dbConfiguration'
                    key='dbConfiguration'
                   
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <FaDatabase style={{height:"25px",width:"25px",color:'white'}} />
                    
                    <span className="capitalize text-white ml-2">DB Configuration</span>
                  </NavLink>
                  </div>
                  <div className='mt-0'>
                  <NavLink
                    to='/dbQuerySelector'
                    key='dbQuerySelector'
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <MdOutlineSchema style={{height:"25px",width:"25px",color:'white'}} />
                    <span className="capitalize text-white ml-2">DB Query Selector</span>
                  </NavLink>
                  </div>
                  <div className='mt-0'>
                  <NavLink
                    to='/openaiConfiguration'
                    key='openaiConfiguration'
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      <SiOpenai style={{height:"25px",width:"25px",color:'white'}} />
                    
                    
                    <span className="capitalize text-white ml-2">OpenAI Configuration</span>
                  </NavLink>
                  </div>
                  </div>
                
      </div>
      </>)},
      {!activeMenu && (<>
      <div className="flex justify-between items-center" >
     
      </div>
      <div className='mt-10 ml-4'>
        <div>
      <NavLink
                    to='/queryGenerator'
                    key='queryGenerator'
                   
                   
                   
                  >
                    <MdOutlineQueryStats style={{height:"25px",width:"25px",color:"white"}} />
                  
                    
                  </NavLink>
                  </div>
                  <div className='mt-4'>
                  <NavLink
                    to='/dbConfiguration'
                    key='dbConfiguration'
                   
                    className="flex"
                  >
                    <FaDatabase style={{height:"25px",width:"25px",color:"white"}} />
                    
                  
                  </NavLink>
                  </div>
                  <div className='mt-4'>
                  <NavLink
                    to='/dbQuerySelector'
                    key='dbQuerySelector'
                    className="flex"
                  >
                    <MdOutlineSchema style={{height:"25px",width:"25px",color:'white'}} />
                  
                  </NavLink>
                  </div>
                  <div className='mt-4'>
                  <NavLink
                    to='/openaiConfiguration'
                    key='openaiConfiguration'
                    className="flex"
                    >
                      <SiOpenai style={{height:"25px",width:"25px",color:"white"}} />
                    
                    
                  
                  </NavLink>
                  </div>
                  <div style={{marginTop:"350px",marginLeft:"-20px",color:"white"}}>
                  <img
        
          src={nttlogovertical}
          alt="nttlogo"
        />
       
                  </div>
      </div>
      </>)}
       </div>
  )
}

export default Sidebar
