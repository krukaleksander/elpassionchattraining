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
          className={activeElement === "first" ? "active-room" : ""}
          onClick={() => handleChangeRoom("first")}
        >
          #general
        </li>
        <li
          className={activeElement === "second" ? "active-room" : ""}
          onClick={() => handleChangeRoom("second")}
        >
          #test
        </li>
      </ul>
    </aside>
  );
}
