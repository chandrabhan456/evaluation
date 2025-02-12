import React, { createContext, useContext, useState,useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  setting: false,
  notification: false,
  userProfile: false,
  
};
let loginstate;
const initialLoginState = localStorage.getItem('login') 
    ? localStorage.getItem('login') === 'true' 
    : false;
export const ContextProvider = ({ children }) => {
  console.log(localStorage.getItem('openAI_Configuration'))
  
 console.log("loginchan",localStorage.getItem('login'))
 let initialLoginState = localStorage.getItem('login');
 if (initialLoginState === null || initialLoginState === 'false') {
   // If null or true, set to false
   localStorage.setItem('login', 'false');
   initialLoginState = false;
 } else {
   // Otherwise, parse as a boolean
   initialLoginState = localStorage.getItem('login')
 }
  const [activeMenu, setActiveMenu] = useState((localStorage.getItem('openAI_Configuration')) || true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState('blue');
  const [currentMode, setCurrentMode] = useState('Dark');
  const [themeSettings, setThemeSettings] = useState(false);
  const [mainPage, setMainPage] = useState(false)
  const [login1, setlogin1] = useState(initialLoginState);
  useEffect(() => {
    localStorage.setItem('login', login1);
  }, [login1]);
  const [openAiSetting, setopenAiSettings] = useState(true);
  const [dbConfiguration, setDBConfiguration] = useState(false);
  const [dbSchema, setDBSchema] = useState(true);
  const [openAISuccess,setOpenAISuccess] = useState(false);
  const [schemaSuccess,setSchema] = useState(false);
  const [querySuccess,setQuery] = useState(false);
  const [configurationSettings, setConfigSettings] = useState(false);
  const [home,setHome] = useState(true)
  const [playgrond,setPlaygrond] = useState(false)
  const [vertorDB,setVectorDB] = useState(false)
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{currentMode, setCurrentMode,vertorDB,setVectorDB, playgrond,setPlaygrond,home,setHome,login1,setlogin1,mainPage,setMainPage,configurationSettings, setConfigSettings,querySuccess,setQuery,openAiSetting,setopenAiSettings,dbConfiguration,setDBConfiguration,dbSchema,schemaSuccess,setSchema,setDBSchema,openAISuccess,setOpenAISuccess,activeMenu,setActiveMenu,handleClick,setIsClicked,isClicked,initialState,setCurrentColor}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
