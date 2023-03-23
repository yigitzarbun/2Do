import { act } from "react-dom/test-utils";
import {
  ADD_TASK,
  GET_TASKS,
  GET_CATEGORIES,
  DELETE_TASK,
  UPDATE_STATUS,
  UPDATE_PRIORITY,
  ADD_CATEGORY,
  EDIT_TASK,
  DELETE_CATEGORY,
} from "./actions";
const initialState = {
  tasks: [],
  categories: [],
};
const key = "taks2do";
const key2 = "categories2do";

function writeToLs(data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function readFromLs() {
  return JSON.parse(localStorage.getItem(key));
}
function getTasksFromLs() {
  const savedTasks = localStorage.getItem(key);
  if (savedTasks) {
    return readFromLs(key);
  } else {
    return initialState.tasks;
  }
}

function writeToLs2(data) {
  localStorage.setItem(key2, JSON.stringify(data));
}

function readFromLs2() {
  return JSON.parse(localStorage.getItem(key2));
}
function getCategoriesfromLs() {
  const savedCategories = localStorage.getItem(key2);
  if (savedCategories) {
    return readFromLs2(key2);
  }
}
export function myReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: getTasksFromLs(key),
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: getCategoriesfromLs(key2),
      };
    case ADD_TASK:
      const newTask = action.payload;
      const newTasks = [newTask, ...state.tasks];
      writeToLs(newTasks);
      return {
        ...state,
        tasks: [...newTasks],
      };
    case ADD_CATEGORY:
      const newCategory = action.payload;
      const copyCategory = Array.isArray(state.categories)
        ? [...state.categories]
        : [];
      let newCategories;
      if (copyCategory.includes(newCategory) == false) {
        newCategories = [newCategory, ...copyCategory];
      } else {
        newCategories = [...copyCategory];
      }
      writeToLs2(newCategories);
      return {
        ...state,
        categories: [...newCategories],
      };
    case UPDATE_STATUS:
      let copyTasks = [...state.tasks];
      let selectedTask = copyTasks.filter(
        (t) => t.task_id == action.payload["id"]
      )[0];
      selectedTask.status = action.payload.status;
      writeToLs(copyTasks);
      return {
        ...state,
        tasks: [...copyTasks],
      };
    case UPDATE_PRIORITY:
      let copyTasks4 = [...state.tasks];
      let selectedTask2 = copyTasks4.filter(
        (t) => t.task_id == action.payload["id"]
      )[0];
      selectedTask2.priority = action.payload.priority;
      writeToLs(copyTasks4);
      return {
        ...state,
        tasks: [...copyTasks4],
      };
    case DELETE_TASK:
      let copyTasks2 = [...state.tasks];
      let copyTasks3 = copyTasks2.filter((t) => t.task_id !== action.payload);
      writeToLs(copyTasks3);
      return {
        ...state,
        tasks: [...copyTasks3],
      };
    case DELETE_CATEGORY:
      let copyCategories = [...state.categories];
      let copyCategories2 = copyCategories.filter((c) => c != action.payload);
      writeToLs2(copyCategories2);
      return {
        ...state,
        categories: [...copyCategories2],
      };
    case EDIT_TASK:
      const copyTasks5 = [...state.tasks];
      const selectedTask3 = copyTasks5.filter(
        (t) => t.task_id == action.payload.id
      )[0];
      const index = copyTasks5.indexOf(selectedTask3);
      copyTasks5.splice(index, 1, action.payload.data);
      return {
        ...state,
        tasks: [...copyTasks5],
      };
    default:
      return state;
  }
}
