import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
const AddTask = ({addtask}) => {
    const[value,setValue]=useState("");
      
    const addItem=(addTask)=>{
        addtask(value)
        setValue('')
    }
  return (
    <div>
        <input type="text" 
        className='input form-control' 
        placeholder='Add a new task'
        value={value}
        onChange={(e)=>(setValue(e.target.value))}
        />
        <Button onClick={addItem} variant="warning">Add</Button>
    </div>
  )
}

export default AddTask