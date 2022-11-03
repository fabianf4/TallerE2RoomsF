import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"
import Swal from "sweetalert2"

export function CreateMeet() {
  const [affair, setAffair] = useState(undefined)
  const [dateMeet, setDateMeet] = useState(undefined)
  const [room, setRoom] = useState(undefined)

  function send() {
    connectionApi
      .post("/meet", {
        affair,
        dateMeet,
        room: { id: room }
      })
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "Sala creada exitosamente!",
            icon: "success",
            confirmButtonText: "Ok"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: "Error al crear la sala!",
            icon: "error",
            confirmButtonText: "Ok"
          })
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Error al crear la sala!",
          icon: "error",
          confirmButtonText: "Ok"
        })
      })
  }

  return (
    <>
      <h2>Crear reunion</h2>

      <Form>
        <Form.Group>
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el asunto de la reunion"
            onChange={(e) => {
              setAffair(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha y hora</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Ingrese la fecha y hora de la reunion"
            onChange={(e) => {
              setDateMeet(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el ID de la sala"
            onChange={(e) => {
              setRoom(e.target.value)
            }}
          />
        </Form.Group>

        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            send()
          }}
        >
          Enviar
        </Button>
      </Form>
    </>
  )
}
