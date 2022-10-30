import { connectionApi } from "../services/connectionApi"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"

export function ButtonDelRoom({id}) {
  function send() {
    try {
      connectionApi
        .delete(`/room/${id}`)
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Success!",
              text: "Sala eliminada exitosamente!",
              icon: "success",
              confirmButtonText: "Ok"
            })
          }else{
            Swal.fire({
              title: "Error!",
              text: "Error al eliminar la sala!",
              icon: "error",
              confirmButtonText: "Ok"
            })
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button variant="danger" onClick={send}>
      Eliminar
    </Button>
  )
}