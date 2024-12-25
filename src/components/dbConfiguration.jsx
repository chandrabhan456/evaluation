import {React,useState} from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { SiOpenai } from "react-icons/si";
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosInformationCircleOutline } from "react-icons/io";

const DbConfiguration = () => {
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
        <SiOpenai style={{height:"25px",width:"25px",color:'black'}} />
          <p className="font-semibold text-lg ml-2">OpenAI Configuration</p>
        </div>
         

        </div>
        <div style={{marginLeft:'6%',marginTop:'2px'}}>
     <div className='flex'>
     <p style={{marginTop:'15px'}}>Api Key</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div>
     <input type="password" style={{width:'95%',height:'45px',backgroundColor:'#F5F5F5',border:'1px solid #DADADA',borderCollapse:'separate',borderRadius:'10px'}}></input>
   <div>  <div className='flex'>
     <p style={{marginTop:'15px'}}>Temprature</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div> 
    <input style={{width:'95%'}} className='cursor-pointer' type="range" min="1" max="100"  value={percentageTemp} onChange={(ev) => setPercentageTemp(ev.target.value)
    }/>
    <div className='flex'>
    <p>0.0</p>
    <p style={{marginLeft:'88%'}}>1.0</p>
    </div>
    </div>  <div>  <div className='flex'>
     <p style={{marginTop:'15px'}}>Max Token</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div>
    <input style={{width:'95%'}} className='cursor-pointer' type="range" min="100" max="1000"  value={maxToken} onChange={(ev) => setMaxToken(ev.target.value)
    }/>
    <div className='flex'>
    <p>100</p>
    <p style={{marginLeft:'87%'}}>1000</p>
    </div>
    </div> 
    <div>  <div className='flex'>
     <p style={{marginTop:'15px'}}>Top P</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div> 
    <input style={{width:'95%'}} type="range" className='cursor-pointer' min="1" max="100"  value={topP} onChange={(ev) => setTopP(ev.target.value)
    }/>
    <div className='flex'>
    <p>0.0</p>
    <p style={{marginLeft:'88%'}}>1.0</p>
    </div>
    </div> 
    <div>  <div className='flex'>
     <p style={{marginTop:'15px'}}>Frequency Penalty</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div>
    <input style={{width:'95%'}} className='cursor-pointer' type="range" min="1" max="100"  value={frequencyPenalty} onChange={(ev) => setFrequencyPenalty(ev.target.value)
    }/>
    <div className='flex'>
    <p>0.0</p>
    <p style={{marginLeft:'88%'}}>1.0</p>
    </div>
    </div> 
    <div>  <div className='flex'>
     <p style={{marginTop:'15px'}}>Presence Penalty</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div>
    <input style={{width:'95%'}} className='cursor-pointer' type="range" min="1" max="100"  value={presencePenalty} onChange={(ev) => setPresencePenalty(ev.target.value)
    }/>
    <div className='flex'>
    <p>0.0</p>
    <p style={{marginLeft:'88%'}}>1.0</p>
    </div>
    </div> 
    <div>  <div className='flex'>
     <p style={{marginTop:'15px'}}>Best Of</p> 
     <IoIosInformationCircleOutline style={{marginTop:'19px',marginLeft:"3px"}}/>
     </div>
    <input style={{width:'95%'}} className='cursor-pointer' type="range" min="1" max="100"  value={bestOf} onChange={(ev) => setBestOf(ev.target.value)
    }/>
    <div className='flex'>
    <p>1</p>
    <p style={{marginLeft:'90%'}}>10</p>
    </div>
    </div> 
 
<button type='button' style={{display:'block',marginTop:'15px',marginLeft:'0px',height:"40px",width:'22%',border:'1px solid #DADADA',borderRadius:'10px',color:'black'}}  >
  Submit
</button>
   </div>     
      </div>
    </div>
    </div>
  )
}

export default DbConfiguration
