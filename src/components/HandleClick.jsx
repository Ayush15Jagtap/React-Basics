import React from 'react'
import { useState } from 'react'

export default function HandleClick() {
    // const [name,setName]=useState("Ayush")
    const [form,setForm]=useState({email:"",phone:""})


    const handleClick=()=>{
        alert("Clicked")
    }
    const handleOnChange=(e)=>{
        // setName(e.target.value)
        setForm({...form,[e.target.name]:e.target.value})                
    }


  return (
    <>
    <div className="button">
        <button onClick={handleClick}>Click</button>
    </div>
    <div>
        <input type="text" name='email' value={form.email} onChange={handleOnChange}/>
        <input type="text" name='phone' value={form.phone} onChange={handleOnChange}/>
        <p>Email: {form.email}</p>
        <p>Phone: {form.phone}</p>
    </div>
    </>
  )
}
