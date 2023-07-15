import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { AddTasks, getTasks } from "../Redux/TaskReducer/action";
import { TaskNav } from "../Components/TaskNav";

const AddTask = () => {

  const initState= {
    "title": "",
    "status": false
  }

  const [ data, setData ]= useState(initState);
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const AddHandler= (e)=>{
    dispatch(AddTasks(data))
    .then(()=>dispatch(getTasks()))
    navigate("/task")
  }

  return (
    <div style={{paddingTop: "40px"}}>
      <TaskNav />
      <form>
        <input value={data.title}
        onChange= {(e)=> setData({...data, title: e.target.value})}
         placeholder="add task here" />
        <button onClick={AddHandler}>Add task</button>
      </form>
    </div>
  );
};

export default AddTask;