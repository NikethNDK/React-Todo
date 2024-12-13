import React, { useState } from "react";
import "./Todo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
    // const [tasks,setTask]=useState([
    //     {title:'Learn Python'},
    //     {title:'Learn JS'},
    //     {title:'Learn React'},
    // ])
    const [tasks,setTask]=useState([])
    const addTask=(title)=>{
        const newTask = [...tasks,{title}]
        setTask(newTask);
    }
    const removeTask=(index)=>{
        const newTask=[...tasks]
        newTask.splice(index,1)
        setTask(newTask)
    }
  return (
    <>
      <div className="todo-container">
        <div className="header">ToDo App</div>
        <div className="add-task">
          <AddTask addtask={addTask}/>
        </div>
      </div>
      <div className="todo-container1">
        <div className="tasks">
            {tasks.map((tsk,index)=>(
                 <ListTask task={tsk} removetask={removeTask} index={index} key={index}/>
            ))}
         
        </div>
      </div>
    </>
  );
};

export default Todo;
