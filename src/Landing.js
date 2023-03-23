import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="text-center">
      <div className="mb-16">
        <img src="/images/landing.png" alt="hero" />
        <h1 className="text-4xl font-extrabold mb-4">Welcome to 2-Do</h1>
        <h2 className="text-lg mb-4">
          Easily track your to-do's with a few clicks
        </h2>
        <Link to="/tasks">
          <button className="border-2 border-black p-2 mb-4 rounded-lg hover:bg-black hover:text-white">
            Let's Go
          </button>
        </Link>
      </div>
      <div className="flex-col bg-slate-300 py-14 px-4">
        <h2 className="text-xl font-semibold">Create tasks</h2>
        <p className="mb-4">
          Create new tasks by adding the bare minimum, enough to help you stay
          focused and get things done.
        </p>
        <img className="mx-auto" src="/images/new_task.png" />
      </div>
      <div className="flex-col  bg-slate-400 py-14 px-4">
        <h2 className="text-xl font-semibold">Search tasks</h2>
        <p className="mb-4">Never get lost among the sheer number of tasks.</p>
        <img className="mx-auto" src="/images/search_by.png" />
      </div>
      <div className="flex-col  bg-slate-500 py-14 px-4">
        <h2 className="text-xl font-semibold">Get'em done </h2>
        <p className="mb-4">Easily move tasks along the pipeline.</p>
        <img className="mx-auto" src="/images/edit_actions.png" />
      </div>
      <h2 className="text-4xl font-extrabold mt-8 mb-4">Start 2-Doing now!</h2>
      <p className="text-lg mb-8">Free forever, no personal data collected</p>
      <Link to="/tasks">
        <button className="border-2 border-black p-2 mb-8 rounded-lg hover:bg-black hover:text-white">
          Let's Go
        </button>
      </Link>
    </div>
  );
}

export default Landing;
