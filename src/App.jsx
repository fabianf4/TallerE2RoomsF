import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import { CreateMeet } from "./pages/meet/CreateMeet.jsx"
import {Meets} from "./pages/meet/Meets.jsx"

function App() {
  return (
    <Container>
      <CreateMeet />
      <Meets/>
    </Container>
  )
}

export default App
