import {React,useState} from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { SiOpenai } from "react-icons/si";
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsDatabaseFillGear } from "react-icons/bs";

const DatabaseConfig = () => {
    const { setColor, setMode, currentMode, currentColor, setConfigSettings,handleClick,configurationSettings} = useStateContext();
    const [percentageTemp,setPercentageTemp] = useState(35)
    const [maxToken,setMaxToken] = useState(350)
    const [topP,setTopP] = useState(50)
    const [frequencyPenalty,setFrequencyPenalty] = useState(0)
    const [presencePenalty,setPresencePenalty] = useState(0)
    const [bestOf,setBestOf] = useState(10)
    
    return (
      <div >
        
   
      <div className="   flex flex-wrap lg:flex-nowrap justify-center  top-15 ">
        <div className="  h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-550" style={{border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:"10px"}}>
        
          <div className="flex  p-4 ml-4 mt-4">
            <div className=' flex whitespace-nowrap'>
          <BsDatabaseFillGear style={{height:"25px",width:"25px",color:'black'}} />
            <p className="font-semibold text-lg ml-2">Database Configuration</p>
          </div>
           
  
          </div>
          <div style={{marginLeft:'6%',marginTop:'2px'}}>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>Database Type</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>Name</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>HostName</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>Port</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>UserName</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>password</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
       <div className='flex'>
       <p style={{marginTop:'15px'}}>Database</p> 
       <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
       </div>
       <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
    
  <button type='button' style={{display:'block',marginTop:'15px',marginLeft:'0px',height:"40px",width:'22%',border:'1px solid #DADADA',borderRadius:'10px',color:'black'}}  >
    Submit
  </button>
     </div>     
        </div>
      </div>
      </div>
    )
}

export default DatabaseConfig
