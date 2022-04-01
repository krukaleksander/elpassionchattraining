interface IHandleActiveElement {
  activeRoom: string;
  handleChangeRoom: (name: string) => void;
}

export function RoomList({
  activeRoom,
  handleChangeRoom,
}: IHandleActiveElement) {
  return (
    <aside className="rooms-list">
      <ul>
        <li
          className={activeRoom === "general" ? "active-room" : ""}
          onClick={() => handleChangeRoom("general")}
        >
          #general
        </li>
        <li
          className={activeRoom === "test" ? "active-room" : ""}
          onClick={() => handleChangeRoom("test")}
        >
          #test
        </li>
      </ul>
    </aside>
  );
}
