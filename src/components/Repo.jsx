import { Code, Star } from "react-feather";
import "./Repo.scss";
import { ReactComponent as ForkSvg } from "../assets/fork.svg";

export default function Repo({ repo }) {
  const { name, html_url, description, language, stargazers_count, forks_count, fork } = repo;

  return (
    <div className="card repo">
      <h3>
        <a href={html_url} target="_blank">
          {name}
        </a>
      </h3>

      {fork && <small>Forked</small>}

      <p>{description}</p>

      <div className="fg-disabled">
        {language && (
          <span>
            <Code /> {language}
          </span>
        )}

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
