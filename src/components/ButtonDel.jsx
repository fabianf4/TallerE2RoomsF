import { connectionApi } from "../services/connectionApi"
import Swal from "sweetalert2"
import { Button } from "react-bootstrap"
import { MdDelete } from "react-icons/md"


export function ButtonDel({ address, id, msgOk, msgError }) {
  function send() {
    connectionApi
      .delete(`${address}${id}`)
      .then((response) => {
        if (response.data) {
          Swal.fire({
            title: "Success!",
            text: msgOk,
            icon: "success",
            confirmButtonText: "Ok"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: msgError,
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
    <Button variant="danger" onClick={send}>
      Eliminar
      <MdDelete />
    </Button>
  )
}
