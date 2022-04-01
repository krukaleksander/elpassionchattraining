export function RoomList({ activeElement, setActiveElement }) {
  return (
    <aside className="rooms-list">
      <ul>
        <li
          className={activeElement === "first" ? "active-room" : null}
          onClick={() => setActiveElement("first")}
        >
          #general
        </li>
        <li
          className={activeElement === "second" ? "active-room" : null}
          onClick={() => setActiveElement("second")}
        >
          #test
        </li>
      </ul>
    </aside>
  );
}
