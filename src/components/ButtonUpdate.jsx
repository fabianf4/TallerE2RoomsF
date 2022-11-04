import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { MdUpdate } from "react-icons/md"

export function ButtonUpdate({ childrenUpdate , title }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)} className="me-2">
        Actualizar <MdUpdate />
      </Button>

      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {childrenUpdate}
        </Modal.Body>
      </Modal>
    </>
  )
}
