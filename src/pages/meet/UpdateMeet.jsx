import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"
import Swal from "sweetalert2"

export function UpdateMeet({ id , infoAffair="", infoDateMeet="", infoRoomId="" }) {

  const [affair, setAffair] = useState("")
  const [dateMeet, setDateMeet] = useState("")
  const [roomId, setRoomId] = useState("")

  useEffect(() => {
    setAffair(infoAffair)
    setDateMeet(infoDateMeet)
    setRoomId(infoRoomId)
  }, [])

  function send() {
    connectionApi
      .put(`/meet`, {
        id,
        affair,
        dateMeet,
        "room":{"id":roomId}
      })
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "Reunion actualizada exitosamente!",
            icon: "success",
            confirmButtonText: "Ok"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: "Error al actualizar la Reunion!",
            icon: "error",
            confirmButtonText: "Ok"
          })
        }
      })
      .catch((e) => {
        console.log(e)
        Swal.fire({
          title: "Error!",
          text: "Error al actualizar la Reunion!",
          icon: "error",
          confirmButtonText: "Ok"
        })
      })
  }

  return (
    <>

      <Form>
        <Form.Group>
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Asunto de la reunion"
            value={affair}
            onChange={(e) => {
              setAffair(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha y hora de la reunion</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Ingrese la fecha y hora de la reunion"
            value={dateMeet}
            onChange={(e) => {
              setDateMeet(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Id de la sala</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el id de la sala"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value)
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
