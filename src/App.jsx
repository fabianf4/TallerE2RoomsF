import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import { Create } from "./pages/room/Create.jsx"
import {Rooms} from "./pages/room/Rooms.jsx"

function App() {
  return (
    <Container>
      <Create />
      <Rooms/>
    </Container>
  )
}

export default App
