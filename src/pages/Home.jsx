import { Outlet } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { UpdateRoom } from "./room/UpdateRoom.jsx"
import { FindMeet } from "./room/FindMeet.jsx"

export function Home() {
  return (
    <>
      <h1>Reuniones</h1>

      <Nav>
        <Nav.Item>
          <Nav.Link href="/TallerE2RoomsF/rooms">Salas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/TallerE2RoomsF/meets">Reuniones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/TallerE2RoomsF/acts">Actas</Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <Outlet />
    </>
  )
}
