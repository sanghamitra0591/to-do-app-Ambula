import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getTasks } from "../Redux/TaskReducer/action";
import { Link } from "react-router-dom";

export const TaskNav = () => {

  
  const taskList= useSelector((store)=>store.TaskReducer.tasks);
  const dispatch= useDispatch();

  useEffect(()=>{
    if(taskList.length===0){
      dispatch(getTasks());
    }
  }, [dispatch, taskList.length]);

  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
        marginBottom: "15px"
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Pending Tasks</div>
        <div>{taskList && taskList.filter((el)=>el.status===false).length}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Completed Tasks</div>
        <div>{taskList && taskList.filter((el)=>el.status===true).length}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Total Tasks</div>
        <div>{taskList && taskList.length}</div>
      </div>
      <div style={{ display: "flex" }}>
        <Link to="/task/add"><button>Add Task</button></Link>
      </div>
    </div>
  );
};