import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"
import Swal from "sweetalert2"

export function CreateAct() {
  const [description, setDescription] = useState(undefined)
  const [meet, setMeet] = useState(undefined)


  function send() {
   
      connectionApi
        .post("/act", {
          description,
          "meet": { "id":meet}
        })
        .then((response) => {
          if (response.data) {
            Swal.fire({
              title: "Success!",
              text: "Acta creada exitosamente!",
              icon: "success",
              confirmButtonText: "Ok"
            })
          }else{
            Swal.fire({
              title: "Error!",
              text: "Error al crear la acta!",
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
      <h1>Crear Acta</h1>

      <Form>
        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripcion del acta"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Reunion</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el Id de la reunion"
            onChange={(e) => {
              setMeet(e.target.value)
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

