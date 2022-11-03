import { Table, Modal, Button, Row, Container, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { connectionApi } from "../../services/connectionApi"
import { ButtonDel } from "../../components/ButtonDel.jsx"
import { BiAddToQueue } from "react-icons/bi"
import { CreateMeet } from "./CreateMeet"

export function Meets() {
  const [smShow, setSmShow] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    connectionApi.get("/meet").then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col xs="2">
            <h2>Reuniones</h2>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={() => setSmShow(true)}
              className="me-2"
            >
              Agregar <BiAddToQueue />
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Agregar Reunion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateMeet />
        </Modal.Body>
      </Modal>

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Asunto</th>
            <th>Fecha y hora</th>
            <th>Sala</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((meet) => (
            <tr key={meet.id}>
              <td>{meet.id}</td>
              <td>{meet.affair}</td>
              <td>{meet.dateMeet}</td>
              <td>{meet.room.description}</td>
              <td>
                <ButtonDel address="/meet/" id={meet.id} msgOk="Reunion eliminada con exito!" msqError="Error al eliminar la reunion" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
