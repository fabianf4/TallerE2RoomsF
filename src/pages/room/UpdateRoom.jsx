import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"
import Swal from "sweetalert2"

export function UpdateRoom({ id , infoDescription="", infoCapacity="" }) {

  const [description, setDescription] = useState("")
  const [capacity, setCapacity] = useState("")

  useEffect(() => {
    setDescription(infoDescription)
    setCapacity(infoCapacity)
  }, [])

  function send() {
    connectionApi
      .put(`/room`, {
        id,
        description,
        capacity
      })
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "Sala actualizada exitosamente!",
            icon: "success",
            confirmButtonText: "Ok"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: "Error al actualizar la sala!",
            icon: "error",
            confirmButtonText: "Ok"
          })
        }
      })
      .catch((e) => {
        console.log(e)
        Swal.fire({
          title: "Error!",
          text: "Error al actualizar la sala!",
          icon: "error",
          confirmButtonText: "Ok"
        })
      })
  }

  return (
    <>
      <h1>Actualizar sala</h1>

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
          <Form.Label>Capacidad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese la capacidad"
            value={capacity}
            onChange={(e) => {
              setCapacity(e.target.value)
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
