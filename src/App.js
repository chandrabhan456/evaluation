import React,{useEffect,useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar,  Sidebar} from './views';
import { useStateContext } from './contexts/ContextProvider';
import {DbConfig,DatabaseConfig,Evaluation1,Home } from './components'
import nttlogo from './data/nttdatalogo.svg';
import Login from "./views/Login";
const App = () => {
  localStorage.setItem('OpenAI_Configuration',true)
 
  const {activeMenu, setActiveMenu,login1,setlogin1 } = useStateContext();
  console.log("chandu",login1)
  
 

  return (
<div>
  <BrowserRouter>
  
  { !login1 && <Login />}
    {login1 &&  
    
  <div className='flex relative '>
    {console.log("login1",login1)}
     {/* {activeMenu ? (
      <div className='w-60 fixed bg-white'>
        <Sidebar />
      </div>
    ) : (<div className='w-16 fixed bg-white'>
      <Sidebar />
      </div>)}  */}
    
    
      <div
            className={
              activeMenu
                ? 'bg-white min-h-screen   md:ml-0 w-full '
                : 'bg-white min-h-screen  md:ml-0 w-full  '
            }
          >
            <div className="fixed md:static bg-white navbar w-full ">
              <Navbar />
            </div>
          
            <Routes>
                {/* dashboard  */}
              

                <Route path="/" element={(<Home />)}/>
                <Route path="/home" element={(<Home />)}/>
                <Route path="/evaluation" element={(<Evaluation1 />)}/>
                <Route path="/openAIConfiguration" element={(<DbConfig />)}/>
                <Route path="/databaseConfig" element={(<DatabaseConfig />)}/> 
               
                </Routes>
  
      </div>
  </div>
   }
 
  </BrowserRouter>
 
</div>  )
}

export default App
