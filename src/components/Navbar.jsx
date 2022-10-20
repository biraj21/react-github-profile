import "./Navbar.scss";
import { ReactComponent as GitHubSvg } from "../assets/github.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <GitHubSvg />
        <h1>GitHub API</h1>
      </div>
    </nav>
  );
}
