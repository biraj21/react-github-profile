import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/:login" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
