import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserPage />
    </div>
  );
}

export default App;
