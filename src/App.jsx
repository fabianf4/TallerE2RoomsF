import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

import { CreateAct } from "./pages/act/CreateAct.jsx"
import {Acts} from "./pages/act/Acts.jsx"
function App() {
  return (
    <Container>
      <CreateAct /> 
      <Acts />
    </Container>
  )
}

export default App
