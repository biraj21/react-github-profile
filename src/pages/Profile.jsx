import "./Profile.scss";
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
      text: "Repositories",
      element: <div>Repos</div>,
    },
    {
      text: "Projects",
      element: <div>Projects</div>,
    },
    {
      text: "Packages",
      element: <div>Packages</div>,
    },
    {
      text: "Stars",
      element: <div>Stars</div>,
    },
  ];

  return (
    <div className="page user-page">
      <UserInfo user={user} />
      <Tabs tabs={tabs} />
    </div>
  );
}
