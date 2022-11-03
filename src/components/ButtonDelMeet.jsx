import { connectionApi } from "../services/connectionApi"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"

export function ButtonDelMeet({id}) {
  function send() {
    
      connectionApi
        .delete(`/meet/${id}`)
        .then((response) => {
          if (response.data) {
            Swal.fire({
              title: "Success!",
              text: "Reunion eliminada exitosamente!",
              icon: "success",
              confirmButtonText: "Ok"
            })
          } else {
            Swal.fire({
              title: "Error!",
              text: "Error al eliminar la Reunion!",
              icon: "error",
              confirmButtonText: "Ok"
            })
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Error al eliminar la sala!",
            icon: "error",
            confirmButtonText: "Ok"
          })
        })
  
  }
  return (
    <Button variant="danger" onClick={send}>
      Eliminar
    </Button>
  )
}