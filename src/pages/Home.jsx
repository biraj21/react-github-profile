import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/${login.trim()}`);
  }

  return (
    <div className="page home">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="GitHub username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>

        <p>
          Alternatively, you can just add the username to the url like this:{" "}
          <i>{new URL("biraj21", window.location.href).href}</i>
        </p>
      </div>
    </div>
  );
}
