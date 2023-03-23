import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateTaskStatus,
  deleteTask,
  updateTaskPriority,
  deleteCategory,
  getTasks,
} from "./redux/actions";
import { formatDistanceToNow } from "date-fns";
import EditTask from "./EditTask";
import { Link } from "react-router-dom";

function Task(props) {
  const [updatePriorityArea, setUpdatePriorityArea] = useState(false);
  const [editTaskArea, setEditTaskArea] = useState(false);
  const dispatch = useDispatch();
  const { task } = props;
  const updateStatus = (status) => {
    dispatch(updateTaskStatus({ id: task.task_id, status: status }));
  };
  const handleUpdateTaskPriority = (newPriority) => {
    dispatch(updateTaskPriority({ id: task.task_id, priority: newPriority }));
    setUpdatePriorityArea(false);
  };
  const handleDelete = () => {
    dispatch(deleteCategory(task.category));
    dispatch(deleteTask(task.task_id));
    dispatch(getTasks());
  };
  const handlePriorityArea = () => {
    setUpdatePriorityArea(!updatePriorityArea);
  };
  const handleEditTaskArea = () => {
    setEditTaskArea(!editTaskArea);
  };
  const distanceToNow = formatDistanceToNow(new Date(task.deadline), {
    addSuffix: true,
  });
  const passedDeadline = {
    color: "red",
  };
  const [actions, setActions] = useState(false);
  const handleActions = () => {
    setActions(!actions);
  };
  return (
    <div>
      {!editTaskArea ? (
        <div className="w-full border p-4 rounded-lg bg-slate-300 shadow mt-4">
          <div className="flex justify-between text-xs mb-2">
            {task.priority == "high" && updatePriorityArea == false && (
              <p
                className="text-red-500 font-bold"
                onClick={handlePriorityArea}
              >
                {task.priority}
              </p>
            )}
            {task.priority == "high" && updatePriorityArea && (
              <div className="flex ">
                <p
                  className="text-red-500 mr-3 font-bold"
                  onClick={handlePriorityArea}
                >
                  {task.priority}
                </p>
                <p
                  className="text-orange-400 mr-3 font-bold"
                  onClick={() => handleUpdateTaskPriority("medium")}
                >
                  medium
                </p>
                <p
                  className="text-blue-500 font-bold"
                  onClick={() => handleUpdateTaskPriority("low")}
                >
                  low
                </p>
              </div>
            )}
            {task.priority == "medium" && updatePriorityArea == false && (
              <p
                className="text-orange-400 font-bold"
                onClick={handlePriorityArea}
              >
                {task.priority}
              </p>
            )}
            {task.priority == "medium" && updatePriorityArea && (
              <div className="flex">
                <p
                  className="text-orange-400 font-bold mr-3"
                  onClick={handlePriorityArea}
                >
                  {task.priority}
                </p>
                <p
                  className="text-red-500 font-bold mr-3"
                  onClick={() => handleUpdateTaskPriority("high")}
                >
                  high
                </p>
                <p
                  className="text-blue-500 font-bold"
                  onClick={() => handleUpdateTaskPriority("low")}
                >
                  low
                </p>
              </div>
            )}
            {task.priority == "low" && updatePriorityArea == false && (
              <p
                className="text-blue-500 font-bold"
                onClick={handlePriorityArea}
              >
                {task.priority}
              </p>
            )}
            {task.priority == "low" && updatePriorityArea && (
              <div className="flex">
                <p
                  className="text-blue-600 mr-3 font-bold"
                  onClick={handlePriorityArea}
                >
                  {task.priority}
                </p>
                <p
                  className="text-red-500 mr-3 font-bold"
                  onClick={() => handleUpdateTaskPriority("high")}
                >
                  high
                </p>
                <p
                  className="text-orange-400 font-bold"
                  onClick={() => handleUpdateTaskPriority("medium")}
                >
                  medium
                </p>
              </div>
            )}
            <div className="flex-col">
              <p style={distanceToNow.includes("ago") ? passedDeadline : {}}>
                {task.deadline}
              </p>
              <p
                className="text-xs italic"
                style={distanceToNow.includes("ago") ? passedDeadline : {}}
              >
                {distanceToNow}
              </p>
            </div>
          </div>
          <Link to="/categories">
            {" "}
            <p className="flex text-xs italic">{task.category}</p>
          </Link>
          <h2 className="flex mb-2 font-bold">{task.title}</h2>
          <p className="flex mb-4">{task.description}</p>
          <div className="flex" onClick={handleActions}>
            {!actions ? (
              <div>
                <img
                  className="w-6 h-6 mt-4 cursor-pointer"
                  src="/images/editing.png"
                  alt="edit"
                />
              </div>
            ) : (
              <div className="flex justify-between items-center mt-8 w-full">
                <img className="w-6 h-6" src="/images/cross.png" alt="close" />
                <p
                  className="p-2 bg-black text-white rounded-md cursor-pointer"
                  onClick={handleEditTaskArea}
                >
                  Edit Task
                </p>
                <img
                  src="/images/delete.png"
                  alt="delete"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleDelete}
                />
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8">
            {task.status == "to-do" && (
              <>
                <div className="bg-slate-400 py-2 w-2/5 px-1 flex items-center justify-around shadow-md rounded-lg">
                  <img
                    className="w-6 h-6"
                    src="/images/right.png"
                    alt="forward"
                  />
                  <button
                    className="text-sm"
                    onClick={() => updateStatus("in-progress")}
                  >
                    In Progress
                  </button>
                </div>
                <div className="bg-slate-400 py-2 w-2/5 px-1 flex items-center justify-around shadow-md rounded-lg">
                  <button
                    className="text-sm"
                    onClick={() => updateStatus("done")}
                  >
                    Done
                  </button>
                  <img
                    className="w-6 h-6"
                    src="/images/right.png"
                    alt="forward"
                  />
                </div>
              </>
            )}
            {task.status == "in-progress" && (
              <>
                <div className="bg-slate-400 py-2 w-2/5 px-1 flex items-center justify-around shadow-md rounded-lg">
                  <img
                    className="w-6 h-6"
                    src="/images/left.png"
                    alt="backward"
                  />
                  <button
                    className="text-sm"
                    onClick={() => updateStatus("to-do")}
                  >
                    To Do
                  </button>
                </div>
                <div className="bg-slate-400 py-2 w-2/5 px-1 flex items-center justify-around shadow-md rounded-lg">
                  <button
                    className="text-sm"
                    onClick={() => updateStatus("done")}
                  >
                    Done
                  </button>
                  <img
                    className="w-6 h-6"
                    src="/images/right.png"
                    alt="forward"
                  />
                </div>
              </>
            )}
            {task.status == "done" && (
              <>
                <div className="bg-slate-400 py-2 w-2/5 px-1 flex items-center justify-around shadow-md rounded-lg">
                  <img
                    className="w-6 h-6"
                    src="/images/left.png"
                    alt="backward"
                  />
                  <button
                    className="text-sm"
                    onClick={() => updateStatus("to-do")}
                  >
                    To Do
                  </button>
                </div>
                <div className="bg-slate-400 py-2 w-2/5 px-1 flex items-center justify-around shadow-md rounded-lg">
                  <button
                    className="text-sm"
                    onClick={() => updateStatus("in-progress")}
                  >
                    In Progress
                  </button>
                  <img
                    className="w-6 h-6"
                    src="/images/left.png"
                    alt="backward"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <EditTask
          handleEditTaskArea={handleEditTaskArea}
          task={task}
          editTaskArea={editTaskArea}
          setEditTaskArea={setEditTaskArea}
        />
      )}
    </div>
  );
}

export default Task;
