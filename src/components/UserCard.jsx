import "./UserCard.scss";

export default function UserCard({ user }) {
  const { login, avatar_url, name, html_url } = user;

  return (
    <div className="card user-card">
      <img src={avatar_url} alt="User's Avatar" className="user-card__avatar" />

      <div className="wrapper">
        <a href={html_url} className="user-card__login">
          {login}
        </a>
      </div>
    </div>
  );
}
