import { Code, Star } from "react-feather";
import "./Repo.scss";
import { ReactComponent as ForkSvg } from "../assets/fork.svg";

export default function Repo({
  name,
  html_url,
  description,
  language,
  stargazers_count,
  forks_count,
}) {
  return (
    <div className="card repo">
      <h3>
        <a href={html_url} target="_blank">
          {name}
        </a>
      </h3>

      <p>{description}</p>

      <div className="fg-disabled">
        <span>
          <Code /> {language}
        </span>
        <span>
          <Star /> {stargazers_count}
        </span>
        <span>
          <ForkSvg /> {forks_count}
        </span>
      </div>
    </div>
  );
}
