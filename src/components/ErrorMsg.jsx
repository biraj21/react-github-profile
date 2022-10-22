import "./ErrorMsg.scss";

export default function ErrorMsg({ msg }) {
  return <span className="error-msg">Error: {msg}</span>;
}
