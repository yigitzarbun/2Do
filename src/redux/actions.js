import { toast } from "react-toastify";

export const ADD_TASK = "ADD_TASK";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_TASKS = "GET_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_PRIORITY = "UPDATE_PRIORITY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const addTask = (data) => {
  toast.success("New Task Created!");
  return { type: ADD_TASK, payload: data };
};
export const addCategory = (data) => {
  return { type: ADD_CATEGORY, payload: data };
};
export const getTasks = () => {
  return { type: GET_TASKS };
};

export const getCategories = () => {
  return { type: GET_CATEGORIES };
};
export const updateTaskStatus = (data) => {
  toast.success("Action Successful!");
  return { type: UPDATE_STATUS, payload: data };
};

export const updateTaskPriority = (data) => {
  return { type: UPDATE_PRIORITY, payload: data };
};

export const editTask = (data) => {
  toast.success("Task Edited!");
  return { type: EDIT_TASK, payload: data };
};
export const deleteTask = (id) => {
  toast.success("Task Deleted!");
  return { type: DELETE_TASK, payload: id };
};

export const deleteCategory = (category) => {
  return { type: DELETE_CATEGORY, payload: category };
};
