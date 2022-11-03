import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"
import Swal from "sweetalert2"

export function CreateRoom() {
  const [description, setDescription] = useState(undefined)
  const [capacity, setCapacity] = useState(undefined)

  function send() {
    
      connectionApi
        .post("/room", {
          description,
          capacity
        })
        .then((response) => {
          if (response.data) {
            Swal.fire({
              title: "Success!",
              text: "Sala creada exitosamente!",
              icon: "success",
              confirmButtonText: "Ok"
            })
          }else{
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
            text: msgError,
            icon: "error",
            confirmButtonText: "Ok"
          })
        })
    
  }

  return (
    <>
      <h1>Crear sala</h1>

      <Form>
        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripcion"
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
