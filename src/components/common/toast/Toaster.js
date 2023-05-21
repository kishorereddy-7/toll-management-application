import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const Toaster = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{props.header}</strong>
          </Toast.Header>
          <Toast.Body>{props.descrption}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default Toaster;
