import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Main from "./Main";
import Categories from "./Categories";
function App() {
  return (
    <div className="max-w-lg mx-auto">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/tasks" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
