import { connectionApi } from "../services/connectionApi"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"
import { MdDelete } from "react-icons/md"

export function ButtonDelRoom({ id }) {
  function send() {
    connectionApi
      .delete(`/room/${id}`)
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: "Sala eliminada exitosamente!",
            icon: "successs",
            confirmButtonText: "Ok"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: "Error al eliminar la sala!",
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
      <MdDelete />
    </Button>
  )
}
