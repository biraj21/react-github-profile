import { Book, Layout, Package, Star } from "react-feather";
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
    content = (
      <>
        {repos.map((repo) => (
          <Repo
            key={repo.name}
            name={repo.name}
            html_url={repo.html_url}
            description={repo.description}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
          />
        ))}
      </>
    );
  } else {
    content = (
      <h3 className="loading-msg">
        <Loader />
      </h3>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function UserPage() {
  const user = {
    login: "biraj21",
    name: "Biraj",
    avatarUrl: "https://avatars.githubusercontent.com/u/37879496?v=4",
    bio: "I like Anime, Chess, Deep Learning, Mathematics and Programming.",
    numFollowers: 22,
    numFollowing: 19,
    location: "Bangalore, Karnataka, India",
    link: "https://biraj21.netlify.app",
    twitter: "biraj21__",
    repos_url: "https://api.github.com/users/biraj21/repos",
    starred_url: "https://api.github.com/users/biraj21/starred{/owner}{/repo}",
  };

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

  return (
    <div className="page user-page">
      <UserInfo user={user} />
      <Tabs tabs={tabs} />
    </div>
  );
}
