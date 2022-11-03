import { Table, Modal, Button, Row, Container, Col } from "react-bootstrap"
import {useEffect, useState} from 'react'
import { connectionApi } from '../../services/connectionApi'
import { ButtonDel } from '../../components/ButtonDel.jsx'
import { BiAddToQueue } from "react-icons/bi"
import { CreateRoom } from '../room/CreateRoom'

export function Rooms(){
    const [smShow, setSmShow] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        connectionApi.get('/room')
        .then(response => {
            setData(response.data)
        })
    }, [])
        
    return (
        <>
        <Container>
        <Row>
          <Col xs="2">
            <h2>Salas</h2>
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
            Agregar Sala
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateRoom />
        </Modal.Body>
      </Modal>

            <Table>
                <thead>
                    <tr>    
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Capacidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(room => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td>{room.description}</td>
                            <td>{room.capacity}</td>
                            <td><ButtonDel address="/room/" id={room.id} msgOk="Sala eliminada con exito!" msqError="Error al eliminar la sala"/></td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )   
}