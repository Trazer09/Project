"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, addTask] = useState("")
    const [desc, addDesc] = useState("")

const submitHandler = (e)=>{
e.preventDefault()
addTask("")
addDesc("")
}
  return (

    
    <>

     <h1 className= "bg-black text-white text-5xl p-2 py-5 text-center font-bold">To-do list</h1>

  
   

<form onSubmit={submitHandler}>
  <input className='border-4 border-black rounded m-8 px-6 py-1' placeholder='Enter Task' value={task}  onChange={(e)=>{
addTask(e.target.value)
  }}>

  </input>

  <input className='border-4 border-black rounded m-8 px-6 py-1 ' placeholder='Enter Description' 
  value={desc} onChange={(e)=>{
addDesc(e.target.value)
  }} >

  </input>


<button className='bg-emerald-400 text-white rounded font-bold m-8 px-6 py-2'>
  Add Task
</button>

  </form>
    
    </>

  )
}

export default page