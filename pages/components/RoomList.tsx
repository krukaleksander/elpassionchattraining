export function RoomList({ activeElement, handleChangeRoom }) {
  return (
    <aside className="rooms-list">
      <ul>
        <li
          className={activeElement === "first" ? "active-room" : null}
          onClick={() => handleChangeRoom("first")}
        >
          #general
        </li>
        <li
          className={activeElement === "second" ? "active-room" : null}
          onClick={() => handleChangeRoom("second")}
        >
          #test
        </li>
      </ul>
    </aside>
  );
}
