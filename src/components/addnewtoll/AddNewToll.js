import { Modal, Button } from "react-bootstrap";

const newTollVehicleList = [
  {
    name: "Car/Jeep/Van",
    singleJourneyPrice: null,
    returnJourneyPrice: null,
    uniqueId: 1,
  },
  {
    name: "LCV",
    singleJourneyPrice: null,
    returnJourneyPrice: null,
    uniqueId: 2,
  },
  {
    name: "Truck/Bus",
    singleJourneyPrice: null,
    returnJourneyPrice: null,
    uniqueId: 3,
  },
  {
    name: "Heavy vehicle",
    singleJourneyPrice: null,
    returnJourneyPrice: null,
    uniqueId: 4,
  },
];

const AddNewToll = (props) => {

  const handleClose = () => {
    props.onCloseAddNewToll();
  }

  return (
    <Modal size="lg" show={props.show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Toll</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="form-label required">Toll Name</label>
        <input className="form-control" placeholder="Enter Toll Name"></input>
        <div className="mt-4">
          <label className="form-label">Vehicle fair details</label>
          {newTollVehicleList.map((vehicle, i) => {
            return (
              <div key={i} className="row">
                <p className="input-margin col-3">{vehicle.name}</p>
                <div className="col-4">
                  <input
                    style={{ marginRight: "10px" }}
                    className="form-control col-4"
                    placeholder="Single Journey"
                  ></input>
                  <div className="invalid-feedback"></div>
                </div>
                <div className="col-4">
                  <input
                    className="form-control"
                    placeholder="Return Journey"
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Add Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNewToll