import { Outlet } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { UpdateRoom } from "./room/UpdateRoom.jsx"

export function Home() {
  return (
    <>
      <h1>Reuniones</h1>

      <Nav>
        <Nav.Item>
          <Nav.Link href="/rooms">Salas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/meets">Reuniones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/acts">Actas</Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <Outlet />
    </>
  )
}
