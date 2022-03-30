import type { NextPage } from "next";
import { SetStateAction, useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { io, Socket } from "socket.io-client";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState<Socket>();
  const [listOfMessage, setListOfMessage] = useState<string[]>([]);
  const handleMessage = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setListOfMessage((prevState) => [...prevState, "3sek"]);
    }, 3000);
    // remember it is like mounting and unmounting!
    const socket = io("ws://localhost:3000");
    socket.on("WELCOME MESSAGE", (msg: string) => addMessageToList(msg));
    socket.on("new-message-from-server", (msg: string) =>
      addMessageToList(msg)
    );
    setSocket(socket);
    return () => {
      socket.disconnect();
      socket.removeAllListeners();
      clearTimeout(myTimeout);
    };
  }, []);
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const addMessageToList = (msg: string) => {
    setListOfMessage((prevState) => [...prevState, msg]);
  };
  const sendMessageToServer = (msg: string) => {
    socket?.emit("new-message", msg);
  };
  const scrollToBottom = () => {
    messageBoxRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  const addMessageToListFromBox = () => {
    setListOfMessage([...listOfMessage, "INNY EVENT"]);
  };
  useEffect(() => {
    scrollToBottom();
  }, [listOfMessage]);

  return (
    <div className={styles.container}>
      <h1 className={styles.uglyTitle}>Welcome in The Ugly Chat ;)</h1>
      <div className={styles.chatWindow}>
        <div
          className={styles.messageDisplay}
          onClick={() => addMessageToListFromBox()}
        >
          {listOfMessage.length > 0 &&
            listOfMessage.map((msg, index) => <p key={index}>{msg}</p>)}
          <div ref={messageBoxRef}></div>
        </div>
        <input
          value={message}
          className={styles.inputText}
          onChange={(e) => handleMessage(e)}
          type="text"
          onKeyPress={(e) => {
            if (e.charCode == 13) {
              sendMessageToServer(message);
              addMessageToList(message);
              setMessage("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Home;
