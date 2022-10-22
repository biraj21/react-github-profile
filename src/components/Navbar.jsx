import "./Navbar.scss";
import { ReactComponent as GitHubSvg } from "../assets/github.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <GitHubSvg />
        <h1>GitHub API</h1>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : null)} end>
          Home
        </NavLink>
      </div>
    </nav>
  );
}
