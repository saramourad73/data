import React, { useState } from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'

const Page = () => {

  const navigate=useNavigate()
const [cancel,setcancel]=useState(false)
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [money,setmoney]=useState("")

const handleAdd=()=>{
  console.log(name)
}


  return (
 

 <>
 
 <div className='model-contener' onClick={(e)=>{
if(e.target.className==='model-contener')
return(e)

 }}>
       
       <div className='model'>
        <form>
            <div className='form-group'>
            <label>Name</label>
            <input value={name} onChange={(s)=>setname(s.target.value)} name='name'/>
            </div>
   
            <div className='form-group'>
            <label>Email</label>
            <input  value={email} onChange={(a)=>setemail(a.target.value)} name='Emali'/>
            </div>
   
            <div className='form-group'>
            <label>Money</label>
            <input  value={money} onChange={(m)=>setmoney(m.target.value)} name='Money'/>
            </div>
            <div className='butts'>
            <button className='btn'onClick={handleAdd} >Submit</button>
            <button className='bton' onClick={()=>setcancel(true)} >Cancel</button>
            {cancel &&navigate('/Data') }
            </div>
   
   
        </form>
   
   
       </div>
     </div>
 
 
 </>
  )
}

export default Page
