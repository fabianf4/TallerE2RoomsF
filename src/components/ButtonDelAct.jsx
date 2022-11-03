import { connectionApi } from "../services/connectionApi"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"

export function ButtonDelAct({id}) {
  function send() {
    
      connectionApi
        .delete(`/act/${id}`)
        .then((response) => {
          if (response.data) {
            Swal.fire({
              title: "Success!",
              text: "Acta eliminada exitosamente!",
              icon: "success",
              confirmButtonText: "Ok"
            })
          } else {
            Swal.fire({
              title: "Error!",
              text: "Error al eliminar el Acta!",
              icon: "error",
              confirmButtonText: "Ok"
            })
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Error al eliminar el Acta!",
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