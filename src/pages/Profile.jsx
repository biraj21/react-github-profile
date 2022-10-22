import { Book, Layout, Package, Star } from "react-feather";
import { useParams } from "react-router-dom";
import "./Profile.scss";
import Loader from "../components/Loader";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UserInfo from "../components/UserInfo";
import { useFetch } from "../hooks/useFetch";

const BASE_URL = "https://api.github.com";

function Repositores({ className, url }) {
  const { data: repos, error } = useFetch(url);

  let content;
  if (error) {
    content = <p className="error-msg">{error}</p>;
  } else if (repos) {
    if (repos.length === 0) {
      content = `No${className === "stars" ? "starred " : ""} repositories.`;
    } else {
      content = (
        <>
          {repos.map((repo) => (
            <Repo key={repo.name} repo={repo} />
          ))}
        </>
      );
    }
  } else {
    content = <Loader />;
  }

  return <div className={className}>{content}</div>;
}

export default function UserPage() {
  const { login } = useParams();
  const { data: user, error } = useFetch(`${BASE_URL}/users/${login}`);

  let content;
  if (error) {
    content = <p className="error-msg">{error}</p>;
  } else if (user) {
    const tabs = [
      {
        linkContent: (
          <>
            <Book /> Repositories
          </>
        ),
        element: <Repositores className="repositories" url={user.repos_url} />,
      },
      {
        linkContent: (
          <>
            <Layout /> Projects
          </>
        ),
        element: <div>Projects</div>,
      },
      {
        linkContent: (
          <>
            <Package /> Packages
          </>
        ),
        element: <div>Packages</div>,
      },
      {
        linkContent: (
          <>
            <Star /> Stars
          </>
        ),
        element: (
          <Repositores
            className="stars"
            url={user.starred_url.slice(0, user.starred_url.indexOf("{"))}
          />
        ),
      },
    ];

    content = (
      <>
        <UserInfo user={user} />
        <Tabs tabs={tabs} />
      </>
    );
  } else {
    content = <Loader />;
  }

  return <div className="page profile">{content}</div>;
}
