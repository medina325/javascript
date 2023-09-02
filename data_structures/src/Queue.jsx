import {useEffect, useState} from "react";
import Notification from "./Notification";

const data = [
  {
    id: "id-1",
    username: "Lana",
  },
  {
    id: "id-2",
    username: "Jorge",
  },
  {
    id: "id-3",
    username: "Petucia",
  },
];

export default function Queue() {
  const [notifications, setNotifications] = useState([]);
  const [buffer, setBuffer] = useState(data);

  useEffect(() => {
    const id = setInterval(() => {
      if (buffer.length > 0) {
        const updatedBuffer = [...buffer];
        const bufferPop = updatedBuffer.shift();

        const updatedNotifications = [...notifications, bufferPop];
        setNotifications(updatedNotifications);
        setBuffer(updatedBuffer);
      }
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [notifications, buffer]);

  useEffect(() => {
    const id = setInterval(() => {
      if (notifications.length > 0) {
        // like pop but without modifying the original state array
        const updatedNotifications = [...notifications];
        const notificationPop = updatedNotifications.shift();

        const updatedBuffer = [...buffer, notificationPop];

        setNotifications(updatedNotifications);
        setBuffer(updatedBuffer);
      }
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, [notifications, buffer]);

  return notifications.map(({id, username}) => (
    <Notification key={id} username={username} />
  ));
}
