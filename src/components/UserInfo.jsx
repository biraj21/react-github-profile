import "./UserInfo.scss";
import { ReactComponent as SvgLink } from "../assets/link.svg";
import { ReactComponent as SvgMapPin } from "../assets/map-pin.svg";
import { ReactComponent as SvgTwitter } from "../assets/twitter.svg";
import { ReactComponent as SvgUser } from "../assets/users.svg";

export default function UserInfo({ user }) {
  return (
    <div className="user">
      <div className="avatar-names-wrapper">
        <img src={user.avatarUrl} alt="User's Avatar" className="user__avatar" />
        <div className="names-wrapper">
          <span className="user__name">{user.name}</span>
          <span className="user__id fg-disabled">{user.id}</span>
        </div>
      </div>

      <p className="user__bio">{user.bio}</p>

      <div className="user__connections">
        <SvgUser />
        {user.numFollowers}&nbsp;<span className="fg-disabled">followers</span>&nbsp;&#183;&nbsp;
        {user.numFollowing}&nbsp;<span className="fg-disabled">following</span>
      </div>

      <div className="user__other-details">
        <span>
          <SvgMapPin /> {user.location}
        </span>
        <span>
          <SvgLink />{" "}
          <a href={user.link} target="_blank">
            {user.link}
          </a>
        </span>
        <span>
          <SvgTwitter />{" "}
          <a href={`https://twitter.com/${user.twitter}`} target="_blank">
            @{user.twitter}
          </a>
        </span>
      </div>
    </div>
  );
}
