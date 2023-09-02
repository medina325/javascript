export default function Message({text, username}) {
  return (
    <div className="message">
      <div className="message__text">{text}</div>
      <div className="message__user">{username}</div>
    </div>
  );
}
