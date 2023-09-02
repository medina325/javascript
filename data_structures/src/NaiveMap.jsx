import Message from "./Message";

const messages = [
  {
    id: "message-1",
    text: "Hey Folks!",
    userId: 1,
  },
  {
    id: "message-2",
    text: "Hi",
    userId: 2,
  },
];

const users = [
  {
    id: 1,
    name: "Paul",
  },
  {
    id: 2,
    name: "Lisa",
  },
];

export default function NaiveMap() {
  const userMessages = messages.map((msg) => {
    const user = users.find((user) => user.id == msg.userId);

    return <Message key={msg.id} text={msg.text} username={user.name} />;
  });

  return userMessages;
}
