"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, addTask] = useState("")  //adding the task 
  const [desc, addDesc] = useState("")  //adding the description
  const [mainTask, setMainTask] = useState([]) //storing the tasks and description ussing array

const submitHandler = (e)=>{
e.preventDefault()
setMainTask([...mainTask, {task, desc}])
addTask("")
addDesc("")
   
}

const deleteHandler = (i)=>{
 let copyTask = [...mainTask]
 copyTask.splice(i,1)
 setMainTask(copyTask)
}

let renderTask = <h2>Empty</h2>

if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
    <ul  className='flex items-center justify-between' key={i}> 
    <div className='flex justify-between w-1/2 m-3' >
    <h5 className='text-2xl font-semibold'>{t.task}</h5>
    <h6 className='text-xl font-semibold'>{t.desc}</h6>
  </div>

  
  <button onClick={
    ()=>{deleteHandler(i)}
  }
  className='bg-red-400 text-white font-bold rounded p-2 '>DELETE</button>
  </ul>
   
    )
  })

}



  return (

    
    <>

     <h1 className= "bg-black text-white text-5xl p-2 py-5 text-center font-bold">To-do list</h1>

  
  
<form onSubmit={submitHandler}>
  <input className='border-4 border-black rounded m-8 px-6 py-1' placeholder='Enter Task' value={task}  onChange={(e)=>{
addTask(e.target.value)
  }}/>

 

  <input className='border-4 border-black rounded m-8 px-6 py-1 ' placeholder='Enter Description' 
  value={desc} onChange={(e)=>{
addDesc(e.target.value)
  }} />




<button className='bg-emerald-400 text-white rounded font-bold m-8 px-6 py-2'>
  Add Task
</button>

  </form>
    
    <hr/>
  <br/>
  <div className='bg-gray-300 p-7'>
  
    {renderTask}
   

  </div>
    
    </>

  )
}

export default page