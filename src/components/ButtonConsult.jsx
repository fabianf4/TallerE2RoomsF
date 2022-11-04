import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

export function ButtonConsult({ children , title }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className="me-2">
        Buscar <BiSearchAlt />
      </Button>

      <Modal
        size="lg"
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
            {children}
        </Modal.Body>
      </Modal>
    </>
  )
}
