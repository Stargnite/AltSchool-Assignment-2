import "./App.css";
import useFetch from "./useFetch";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";
import Error from "./components/ErrorPage/Error";
import Users from "./components/Users/Users";

function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navigation />
    </div>
  );
}

export default App;
