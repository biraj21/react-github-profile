import "./UserInfo.scss";
import { Link, MapPin, Twitter, Users } from "react-feather";

export default function UserInfo({ user }) {
  return (
    <div className="user">
      <div className="avatar-names-wrapper">
        <img src={user.avatar_url} alt="User's Avatar" className="user__avatar" />
        <div className="names-wrapper">
          <span className="user__name">{user.name}</span>
          <span className="user__login fg-disabled">{user.login}</span>
        </div>
      </div>

      <p className="user__bio">{user.bio}</p>

      <div className="user__connections">
        <Users />
        {user.followers}&nbsp;<span className="fg-disabled">followers</span>&nbsp;&#183;&nbsp;
        {user.following}&nbsp;<span className="fg-disabled">following</span>
      </div>

      <div className="user__other-details">
        <span>
          <MapPin /> {user.location}
        </span>
        <span>
          <Link />
          <a href={user.blog} target="_blank">
            {user.blog}
          </a>
        </span>
        <span>
          <Twitter />
          <a href={`https://twitter.com/${user.twitter_username}`} target="_blank">
            @{user.twitter_username}
          </a>
        </span>
      </div>
    </div>
  );
}
