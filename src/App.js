import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Categories from "./Categories";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
