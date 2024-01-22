import { Trash2 } from "lucide-react";

export default function MessageDelete({ id, text, onClick }) {
  return (
    <div className="message-delete">
      <div>{text}</div>
      <button data-id={id} className="delete-btn" onClick={onClick}>
        <Trash2 />
      </button>
    </div>
  );
}
