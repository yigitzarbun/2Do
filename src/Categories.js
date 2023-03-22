import React, { useEffect, useState } from "react";
import Task from "./Task";
import { getCategories, getTasks } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const { categories, tasks } = useSelector((store) => store);
  const handleCategory = (c) => {
    setCategory(c);
    setSearch(c);
  };
  const activeCategory = {
    backgroundColor: "black",
    color: "white",
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleClear = () => {
    setSearch("");
    setCategory("");
  };
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTasks());
  }, []);
  return (
    <div>
      <div className="flex justify-between w-3/4 mx-auto items-center">
        <input
          placeholder="search category"
          onChange={handleSearch}
          className=" py-2 my-4 rounded-lg w-3/5 "
          value={search}
        />
        <button
          className="w-1/5 shadow bg-black text-white h-10 rounded-lg"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div className="mt-4 flex-wrap">
        {categories !== null &&
          categories !== undefined &&
          categories.length > 0 &&
          categories
            .filter((c) => {
              if (c && c === "") {
                return c;
              } else if (
                c &&
                c.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return c;
              }
            })
            .map((c) => (
              <p
                className="border-1 bg-slate-300 shadow mt-2 p-4 w-3/4 mx-auto rounded"
                onClick={() => handleCategory(c)}
                style={category == c ? activeCategory : {}}
              >
                {c}
              </p>
            ))}
      </div>
      {tasks
        .filter((t) => t.category == category)
        .map((task) => (
          <Task key={task.task_id} task={task} />
        ))}
    </div>
  );
}

export default Categories;
