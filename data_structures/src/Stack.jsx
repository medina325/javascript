import { useState } from "react"
import MessageDelete from "./MessageDelete";

const data = [
  {
    id: "1",
    text: "Urgent e-mail"
  },
  {
    id: "2",
    text: "Job Offer"
  },
  {
    id: "3",
    text: "Hellooooooo"
  },
]

export default function Stack() {
  const [msgStack, setMsgStack] = useState([])
  const [messages, setMessages] = useState(data);
  const [undoButton, setUndo] = useState(false);

  const handleClick = (el) => {
    const msgId = el.currentTarget.dataset.id;
    const indexToRemove = messages.findIndex(msg => msg.id === msgId);

    if (indexToRemove !== -1) {
      const newArray = [...messages];

      const removedItem = newArray.splice(indexToRemove, 1)[0];
      setMessages(newArray);

      const deletedMsgs = [
        {
          idx: indexToRemove,
          msg: removedItem
        },
        ...msgStack
      ];
      setMsgStack(deletedMsgs);
      setUndo(true);
    }
    console.log(msgStack);
  };

  const handleUndo = () => {
    if (msgStack.length > 0) {
      const newStack = [...msgStack];
      const newArray = [...messages];

      const latestDelMsg = newStack.splice(0, 1)[0];
      setMsgStack(newStack);

      newArray.splice(latestDelMsg.idx, 0, latestDelMsg.msg);
      setMessages(newArray);

      if (newStack.length == 0) {
        setUndo(false);
      }
    }
  };

  return (
    <>
      {messages.map(({ id, text }) => (
        <MessageDelete key={id} id={id} text={text} onClick={handleClick} />
      ))}

      <div className="stack-container">
        {undoButton && <button className="undo-btn" onClick={handleUndo}>Undo</button>}
      </div>
    </>
  )
}