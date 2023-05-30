import React from "react";
import Toast from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";
import { hideToastAction } from "../../state/actions/toastDetailsAction";
import { ToastContainer } from "react-bootstrap";

const Toaster = () => {
  const dispatch = useDispatch();
  const toastDetails = useSelector((state) => state.toastDetails);

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        bg={toastDetails.type}
        onClose={() => dispatch(hideToastAction())}
        show={toastDetails.show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">{toastDetails.header}</strong>
        </Toast.Header>
        <Toast.Body>{toastDetails.descrption}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
