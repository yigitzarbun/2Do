import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { editTask } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, addCategory, deleteCategory } from "./redux/actions";

function EditTask(props) {
  const { editTaskArea, setEditTaskArea, handleEditTaskArea, task } = props;
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
      category: task.category,
      deadline: task.deadline,
      status: task.status,
      priority: task.priority,
    },
  });

  const handleEditTask = (data) => {
    let dataWide = {
      ...data,
      task_id: task.task_id,
    };
    dispatch(deleteCategory(task.category));
    dispatch(editTask({ id: task.task_id, data: dataWide }));
    reset();
    setEditTaskArea(false);
    dispatch(addCategory(data.category));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="mt-4">
      <img
        className="w-8 h-8"
        src="/images/cross.png"
        alt="close"
        onClick={handleEditTaskArea}
      />
      <form
        onSubmit={handleSubmit(handleEditTask)}
        className="newTaskForm flex flex-col"
      >
        <h2> Edit Task</h2>
        <div className="NewTaskFieldContainer">
          <label>Title</label>
          <input {...register("title", { required: "Title is required" })} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="NewTaskFieldContainer">
          <label>Description</label>
          <input
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div className="NewTaskFieldContainer">
          <label>Category</label>
          <input {...register("category")} />
        </div>
        <div className="flex justify-between w-full">
          <div className="NewTaskFieldContainer">
            <label>Priority</label>
            <select {...register("priority")}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="NewTaskFieldContainer">
            <label>Status</label>
            <select
              {...register("status", {
                required: "Status is required",
              })}
            >
              <option value="to-do">To-do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
              {errors.status && <span>{errors.status.message}</span>}
            </select>
          </div>
        </div>
        <div className="NewTaskFieldContainer">
          <label>Due Date</label>
          <input
            type="date"
            {...register("deadline", {
              required: "Due date is required",
            })}
          />
          {errors.deadline && <span>{errors.deadline.message}</span>}
        </div>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditTask;
