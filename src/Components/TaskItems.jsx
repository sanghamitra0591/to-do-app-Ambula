import React from "react";
import { deleteTasks, getTasks, updateTasks } from "../Redux/TaskReducer/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const TaskItems = ({ id, title, status }) => {
  
  const dispatch= useDispatch();

  const deleteHandler= ()=>{
    dispatch(deleteTasks(id))
    .then(()=>dispatch(getTasks()));
  }

  const changeHandler= ()=>{
    dispatch(updateTasks(id, {"status" : !status}))
    .then(()=>dispatch(getTasks()));
  }

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.2rem",
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "380px",
        margin: "auto",
        marginBottom: "1rem",
        justifyContent: "center",
      }}
    >
      <div
        style={{ fontSize: "24px", fontWeight: "600" }}
      >{title}</div>
      <div style={{ fontSize: "18px" }}>{status? "Completed" : "Pending"}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={changeHandler}>Change Status</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItems;