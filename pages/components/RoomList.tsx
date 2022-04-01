interface IHandleActiveElement {
  activeElement: string;
  handleChangeRoom: (name: string) => void;  
}

export function RoomList({
  activeElement,
  handleChangeRoom,
}: IHandleActiveElement) {
  return (
    <aside className="rooms-list">
      <ul>
        <li
          className={activeElement === "general" ? "active-room" : ""}
          onClick={() => handleChangeRoom("general")}
        >
          #general
        </li>
        <li
          className={activeElement === "test" ? "active-room" : ""}
          onClick={() => handleChangeRoom("test")}
        >
          #test
        </li>
      </ul>
    </aside>
  );
}
