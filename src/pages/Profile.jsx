import { Book, Layout, Package, Star, Users } from "react-feather";
import { useParams } from "react-router-dom";
import "./Profile.scss";
import Loader from "../components/Loader";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UserCard from "../components/UserCard";
import UserInfo from "../components/UserInfo";
import { useFetch } from "../hooks/useFetch";
import ErrorMsg from "../components/ErrorMsg";

const BASE_URL = "https://api.github.com/users";

function Repositores({ className, url }) {
  const { data: repos, error } = useFetch(url);

  let content;
  if (error) {
    content = <ErrorMsg msg={error} />;
  } else if (repos) {
    if (repos.length === 0) {
      content = `No${className === "stars" ? " starred" : ""} repositories.`;
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

function People({ className, url }) {
  const { data: users, error } = useFetch(url);

  let content;
  if (error) {
    content = <ErrorMsg msg={error} />;
  } else if (users) {
    if (users.length === 0) {
      content = className === "followers" ? "No followers." : "Not following anyone.";
    } else {
      content = (
        <>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      );
    }
  } else {
    content = <Loader />;
  }

  return <div className={className}>{content}</div>;
}

function createTabs(user) {
  const peopleTabs = [
    {
      linkContent: `Followers (${user.followers})`,
      element: <People className="followers" url={`${BASE_URL}/${user.login}/followers`} />,
    },
    {
      linkContent: `Following (${user.following})`,
      element: <People className="following" url={`${BASE_URL}/${user.login}/following`} />,
    },
  ];

  return [
    {
      linkContent: (
        <>
          <Book /> Repositories ({user.public_repos})
        </>
      ),
      element: <Repositores className="repositories" url={user.repos_url} />,
    },

    {
      linkContent: (
        <>
          <Users /> People
        </>
      ),
      element: <Tabs tabs={peopleTabs} centeredLinks />,
    },

    {
      linkContent: (
        <>
          <Star /> Stars
        </>
      ),
      element: <Repositores className="stars" url={`${BASE_URL}/${user.login}/starred`} />,
    },

    {
      linkContent: (
        <>
          <Layout /> Projects
        </>
      ),
      element: (
        <div className="projects">
          <a href={`https://github.com/${user.login}?tab=projects`} target="_blank">
            Visit GitHub
          </a>
        </div>
      ),
    },

    {
      linkContent: (
        <>
          <Package /> Packages
        </>
      ),
      element: (
        <div className="packages">
          <a href={`https://github.com/${user.login}?tab=packages`} target="_blank">
            Visit GitHub
          </a>
        </div>
      ),
    },
  ];
}

export default function UserPage() {
  const { login } = useParams();
  const { data: user, error } = useFetch(`${BASE_URL}/${login}`);

  let content;
  if (error) {
    content = <ErrorMsg msg={error} />;
  } else if (user) {
    const tabs = createTabs(user);

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
