import { Modal, Button } from "react-bootstrap";

const AddNewToll = (props) => {

  const handleClose = () => {
    props.onCloseAddNewEntry();
  }

  return (
    <Modal show={props.show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Add Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNewToll