import React from 'react'
import { Button } from 'react-bootstrap';
import "./Todo.css";

const ListTask = ({task,index,removetask}) => {
  return (
    <>
        <div className='List-task'>
            <div className='d-flex justify-content-between align-items-center mb-2'><h3>{task.title}</h3>
            <Button variant="danger" onClick={()=>{removetask(index)}}>Delete</Button></div>
        </div>
    </>
  )
}

export default ListTask