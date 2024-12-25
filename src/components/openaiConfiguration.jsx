import React from 'react'
import nttlogo from '../data/nttdatalogo.svg';
import { IoIosInformationCircleOutline  } from "react-icons/io";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";
const openaiConfiguration = () => {
  return (
   
    <div >
        <img
          style={{color:'white',width:'15%',marginLeft:'-20px'}}
          src={nttlogo}
          alt="nttlogo"
        />
   
<div className='flex relative'>
  <div>
<div className='w-[180%] relative' style={{height:'380px',border:'1px solid #4E5D97',borderCollapse:'separate',borderRadius:'30px'}}>
<div className='flex'>
<p className='text-2xl ml-10 mt-5 whitespace-nowrap'>Query Prompt</p>
<IoIosInformationCircleOutline className='mt-5 ml-[55%] text-3xl' />


</div><div className='flex'>
<button  type='button' style={{marginTop:'45%',marginLeft:'40px',height:"15%",width:'30%',border:'1px solid #4E5D97',backgroundColor:'#4E5D97',borderRadius:'10px',color:'white'}}>
 <p className='text-xl'>Genrate <br></br>SQL</p> 
</button>
<button type='button' style={{marginTop:'45%',marginLeft:'75px',height:"15%",width:'30%',border:'1px solid #4E5D97',backgroundColor:'#4E5D97',borderRadius:'10px',color:'white'}}>
 <p className='text-xl'>Open Schema <br></br>Explorer</p> 
</button>
</div>
</div>
<div className='w-[180%] relative' style={{height:'367px',marginTop:'',border:'1px solid #4E5D97',borderCollapse:'separate',borderRadius:'30px'}}>
<div className='flex'>
<p className='text-2xl ml-10 mt-5 whitespace-nowrap'>Generated Query </p>
<IoIosInformationCircleOutline className='mt-5 ml-[48%] text-3xl' />
</div>
</div>
</div>
<div className='ml-64'><div className='ml-5 flex'><p className='mt-0 text-2xl'>Result:</p><HiOutlineRefresh className='mt-0 ml-[85%] text-3xl' ></HiOutlineRefresh><AiOutlineExpandAlt className='mt-0  text-3xl' /><IoIosInformationCircleOutline className='mt-0  text-3xl' /></div>

<div className='w-1400 ml-2' style={{height:'715px',border:'1px solid #4E5D97',borderCollapse:'separate',borderRadius:'30px'}}>
</div></div>
</div>

      
</div>
  )
}

export default openaiConfiguration
