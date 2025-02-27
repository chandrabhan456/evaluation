import React,{useEffect,useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar,  Sidebar} from './views';
import { useStateContext } from './contexts/ContextProvider';
import {DbConfig,DatabaseConfig,Evaluation1,Home,VectorDB,WebSocket } from './components'
import nttlogo from './data/nttdatalogo.svg';
import Login from "./views/Login";
const App = () => {
  localStorage.setItem('OpenAI_Configuration',true)
  localStorage.removeItem("login");
  const {activeMenu, setActiveMenu,login1,setlogin1,currentMode, setCurrentMode, } = useStateContext();
  console.log("chandu",currentMode)
  useEffect(() => {
   
    const currentThemeMode = localStorage.getItem('themeMode');
    if ( currentThemeMode) {
     
      setCurrentMode(currentThemeMode);
    }
  }, []);
 

  return (
<div className={currentMode === 'Dark' ? 'dark' : ''}>
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
            <div className="fixed md:static  navbar w-full ">
              <Navbar />
            </div>
          
            <Routes>
                {/* dashboard  */}
              

                <Route path="/" element={(<Home />)}/>
                <Route path="/home" element={(<Home />)}/>
                <Route path="/vectorDB" element={(<VectorDB />)}/>
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
