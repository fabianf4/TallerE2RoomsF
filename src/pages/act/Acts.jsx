import { Table, Modal, Button, Row, Container, Col } from "react-bootstrap"
import {useEffect, useState} from 'react'
import { connectionApi } from '../../services/connectionApi'
import { ButtonDel } from '../../components/ButtonDel.jsx'
import { BiAddToQueue } from "react-icons/bi"
import { ButtonUpdate } from "../../components/ButtonUpdate"
import { CreateAct } from "./CreateAct"
import { UpdateAct } from "./UpdateAct"

export function Acts(){
    const [smShow, setSmShow] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        connectionApi.get('/act')
        .then(response => {
            setData(response.data)
        })
    }, [])
        
    return (
        <>
            <Container>
        <Row>
          <Col xs="2">
            <h2>Actas</h2>
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
            Agregar Acta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateAct />
        </Modal.Body>
      </Modal>


            <Table>
                <thead>
                    <tr>    
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Reunion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(act => (
                        <tr key={act.id}>
                            <td>{act.id}</td>
                            <td>{act.description}</td>
                            <td>{act.meet.affair}</td>
                            
                            <td>
                            <ButtonUpdate childrenUpdate={<UpdateAct id={act.id} infoDescription={act.description} infoMeetId={act.meet.id}/>} title="Actualizar Acta"/>
                            <ButtonDel address="/act/" id={act.id} msgOk="Acta eliminada con exito!" msqError="Error al eliminar el acta"/>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )  
}     