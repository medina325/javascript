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

export default function MapExample() {
  // const usersById = new Map(users.map((user) => [user.id, user.name]));
  // Better way
  const usersById = new Map(users.map(({id, name}) => [id, name]));

  return messages.map((msg) => (
    <Message
      key={msg.id}
      text={msg.text}
      username={usersById.get(msg.userId)}
    />
  ));
}
