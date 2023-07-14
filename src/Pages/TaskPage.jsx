import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getTasks } from "../Redux/TaskReducer/action";
import TaskItems from "../Components/TaskItems";
import { TaskNav } from "../Components/TaskNav";

const Taskpage = () => {

  const taskList= useSelector((store)=>store.TaskReducer.tasks);
  const dispatch= useDispatch();

  useEffect(()=>{
    if(taskList.length===0){
      dispatch(getTasks());
    }
  }, [dispatch, taskList.length]);
  return (
    <div>
        <TaskNav />
        {taskList && taskList.map((item)=>{
            return <TaskItems key={item.id} id={item.id} title={item.title} status={item.status} />
        })}
    </div>
  );
};

export default Taskpage;