import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./pages/Home.jsx"
import { ErrorPage } from "./pages/ErrorPage.jsx"
import { Acts } from "./pages/act/Acts.jsx"
import { Rooms } from "./pages/room/Rooms.jsx"
import { Meets } from "./pages/meet/Meets.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "TallerE2RoomsF",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        { path: "rooms", element: <Rooms /> },
        { path: "acts", element: <Acts /> },
        { path: "meets", element: <Meets /> }
      ]
    }
  ])
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
