import "./UserPage.scss";
import { ReactComponent as SvgLink } from "../assets/link.svg";
import { ReactComponent as SvgMapPin } from "../assets/map-pin.svg";
import { ReactComponent as SvgTwitter } from "../assets/twitter.svg";
import { ReactComponent as SvgUser } from "../assets/users.svg";

export default function UserPage() {
  return (
    <div className="page user-page">
      <div className="user">
        <div className="avatar-names-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/37879496?v=4"
            alt="User's Avatar"
            className="user__avatar"
          />
          <div className="names-wrapper">
            <span className="user__name">Biraj</span>
            <span className="user__id fg-disabled">briaj21</span>
          </div>
        </div>

        <p className="user__bio">
          I like Anime, Chess, Deep Learning, Mathematics and Programming.
        </p>

        <div className="user__connections">
          <SvgUser />
          22&nbsp;<span className="fg-disabled">followers</span>&nbsp;&#183;&nbsp;19&nbsp;
          <span className="fg-disabled">following</span>
        </div>

        <div className="user__other-details">
          <span>
            <SvgMapPin /> Bangalore, Karnataka, India
          </span>
          <span>
            <SvgLink />{" "}
            <a href="https://biraj21.netlify.app/" target="_blank">
              https://biraj21.netlify.app/
            </a>
          </span>
          <span>
            <SvgTwitter />{" "}
            <a href="https://twitter.com/biraj21__" target="_blank">
              @biraj21__
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
