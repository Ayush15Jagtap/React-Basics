import React from 'react'
import { useState } from 'react'

function FormSubmit() {

    const [form,setForm]=useState({name:"",email:"",password:""});

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();        
        console.log("Form Submitted",form);

        setForm({name:'',email:'',password:''})
    }


  return (
    <form onSubmit={handleSubmit}>
        <h2>User Form</h2>

        <div>
            <label>Name:</label>
            <input type='text' name="name" value={form.name} onChange={handleChange} placeholder='Enter your Name'></input>
            <input type='text' name="email" value={form.email} onChange={handleChange} placeholder='Enter your Email'></input>
            <input type='password' name="password" value={form.password} onChange={handleChange} placeholder='Enter your Password'></input>
        </div>
        <button type='submit'>Submit</button>

    </form>
  )
}

export default FormSubmit