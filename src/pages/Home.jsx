import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const [login, setLogin] = useState("");

  return (
    <div className="page home">
      <div className="wrapper">
        <label>Username:</label>
        <input
          type="text"
          placeholder="GitHub username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Link to={`/${login}`} className="btn">
          Search
        </Link>

        <p>
          Alternatively, you can just add the username to the url like this:{" "}
          <i>{new URL("biraj21", window.location.href).href}</i>
        </p>
      </div>
    </div>
  );
}
