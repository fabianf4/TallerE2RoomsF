import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"
import Swal from "sweetalert2"

export function UpdateAct({ id , infoDescription="", infoMeetId="" }) {

  const [description, setDescription] = useState("")
  const [meetId, setMeetId] = useState("")

  useEffect(() => {
    setDescription(infoDescription)
    setMeetId(infoMeetId)
  }, [])

  function send() {
    connectionApi
      .put(`/act`, {
        id,
        description,
        "meet":{"id":meetId}
      })
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "Acta actualizada exitosamente!",
            icon: "success",
            confirmButtonText: "Ok"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: "Error al actualizar el acta!",
            icon: "error",
            confirmButtonText: "Ok"
          })
        }
      })
      .catch((e) => {
        console.log(e)
        Swal.fire({
          title: "Error!",
          text: "Error al actualizar el acta!",
          icon: "error",
          confirmButtonText: "Ok"
        })
      })
  }

  return (
    <>

      <Form>
        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripcion"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Id de la sala</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el id de la sala"
            value={meetId}
            onChange={(e) => {
              setMeetId(e.target.value)
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
