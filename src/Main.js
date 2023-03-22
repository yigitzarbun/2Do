import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import FilterStatus from "./FilterStatus";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "./redux/actions";

function Main() {
  const tasks = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  const [taskArea, setTaskArea] = useState(false);
  const handleNewTaskArea = () => {
    setTaskArea(!taskArea);
  };
  const [filter, setFilter] = useState("to-do");
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <div className="w-4/5 mx-auto py-4 ">
      <div className="flex justify-between items-center">
        <img
          src={taskArea ? "/images/cross.png" : "/images/add.png"}
          alt="add-to-do"
          className="w-6 h-6"
          onClick={handleNewTaskArea}
        />
        <FilterStatus filter={filter} setFilter={setFilter} />
      </div>
      {taskArea && <NewTask taskArea={taskArea} setTaskArea={setTaskArea} />}
      {Array.isArray(tasks) &&
        tasks &&
        tasks
          .filter((t) => t.status == filter)
          .map((task) => <Task key={task.id} task={task} />)}
      {tasks == null && <p>Loading tasks..</p>}
      {tasks.length == 0 && filter == "to-do" && (
        <div className="mt-4 shadow p-8 rounded-xl">
          <p>No tasks to be done.</p>
          <img
            src="/images/enjoy.png"
            className="w-2/3 mx-auto mt-8"
            alt="no-tasks"
          />
        </div>
      )}
      {tasks.filter((t) => t.status == "in-progress").length == 0 &&
        filter == "in-progress" && (
          <div className="mt-4 shadow p-8 rounded-xl">
            <p>No tasks are in progress.</p>
            <img
              src="/images/lazy.png"
              className="w-full mx-auto mt-8"
              alt="nothing-in-progress"
            />
          </div>
        )}
      {tasks.filter((t) => t.status == "done").length == 0 &&
        filter == "done" && (
          <div className="mt-4 shadow p-8 rounded-xl">
            <p>No tasks are done yet.</p>
            <img
              src="/images/lazy.png"
              className="w-full mx-auto mt-8"
              alt="nothing-in-done"
            />
          </div>
        )}
    </div>
  );
}

export default Main;
