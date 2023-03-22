import React, { useState } from "react";

function FilterStatus(props) {
  const { filter, setFilter } = props;
  const handleFilter = (e) => {
    setFilter(e);
  };
  const activeFilter = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div className="w-4/5 mx-auto py-4 ">
      <div className="flex justify-between items-center">
        <div>
          <button
            className="border-2 border-black rounded p-1 hover:bg-black hover:text-white"
            onClick={() => handleFilter("to-do")}
            style={filter == "to-do" ? activeFilter : {}}
          >
            To Do
          </button>
        </div>
        <div>
          <button
            className="border-2 border-black rounded p-1 hover:bg-black hover:text-white"
            onClick={() => handleFilter("in-progress")}
            style={filter == "in-progress" ? activeFilter : {}}
          >
            In Progress
          </button>
        </div>
        <div>
          <button
            className="border-2 border-black rounded p-1 hover:bg-black hover:text-white"
            onClick={() => handleFilter("done")}
            style={filter == "done" ? activeFilter : {}}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterStatus;
