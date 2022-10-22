import { Book, Layout, Package, Star } from "react-feather";
import "./Profile.scss";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UserInfo from "../components/UserInfo";

export default function UserPage() {
  const user = {
    id: "biraj21",
    name: "Biraj",
    avatarUrl: "https://avatars.githubusercontent.com/u/37879496?v=4",
    bio: "I like Anime, Chess, Deep Learning, Mathematics and Programming.",
    numFollowers: 22,
    numFollowing: 19,
    location: "Bangalore, Karnataka, India",
    link: "https://biraj21.netlify.app",
    twitter: "biraj21__",
  };

  const tabs = [
    {
      linkContent: (
        <>
          <Book /> Repositories
        </>
      ),
      element: (
        <div className="repos">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <Repo
                key={"array-visualizer" + i}
                name="array-visualizer"
                description="A simple tool that can be used to visualize multi-dimensional arrays."
                html_url="https://github.com/biraj21/array-visualizer"
                language="JavaScript"
                stargazers_count="7"
                fork_count="1"
              />
            ))}
        </div>
      ),
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
        <div className="stars">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <Repo
                key={"react_github_api" + i}
                name="react_github_api"
                html_url="https://github.com/biraj21/react_github_api"
                language="JavaScript"
                stargazers_count="0"
                fork_count="0"
              />
            ))}
        </div>
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
