import "./UserInfo.scss";
import { Link, MapPin, Twitter, Users } from "react-feather";

export default function UserInfo({ user }) {
  const { login, avatar_url, name, followers, following, bio, blog, location, twitter_username } =
    user;

  return (
    <div className="user">
      <div className="avatar-names-wrapper">
        <img src={avatar_url} alt="User's Avatar" className="user__avatar" />
        <div className="names-wrapper">
          <span className="user__name">{name}</span>
          <span className="user__login fg-disabled">{login}</span>
        </div>
      </div>

      <p className="user__bio">{bio}</p>

      <div className="user__connections">
        <Users />
        {followers}&nbsp;<span className="fg-disabled">followers</span>&nbsp;&#183;&nbsp;
        {following}&nbsp;<span className="fg-disabled">following</span>
      </div>

      <div className="user__other-details">
        {location && (
          <span>
            <MapPin /> {location}
          </span>
        )}

        {blog && (
          <span>
            <Link />
            <a href={blog} target="_blank">
              {blog}
            </a>
          </span>
        )}

        {twitter_username && (
          <span>
            <Twitter />
            <a href={`https://twitter.com/${twitter_username}`} target="_blank">
              @{twitter_username}
            </a>
          </span>
        )}
      </div>
    </div>
  );
}
