import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { addTollsManagementAction } from "../state/actions/tollsManagementAction";
import { tollCenterIntialState } from "../common/contants";

const priceLabel = {
  singleJourneyPrice: "singleJourneyPrice",
  returnJourneyPrice: "returnJourneyPrice",
};

const AddNewToll = (props) => {
  const dispatch = useDispatch();
  const [tollName, setTollName] = useState("");
  const [tollNameInvalid, setTollNameInvalid] = useState(false);

  const [journeyPrice, setJourneyPrice] = useState(tollCenterIntialState);

  const resetState = () => {
    setTollName("");
    setTollNameInvalid(false);
    setJourneyPrice(tollCenterIntialState);
  };

  const handleClose = () => {
    props.onCloseAddNewToll();
    resetState();
  };

  const onChangeTollName = (event) => {
    setTollName(event.target.value);
    setTollNameInvalid(event.target.value ? false : true);
  };

  const onChangeJourneyPrice = (event, id, labelPrice) => {
    setJourneyPrice((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              [labelPrice]: event.target.value,
              [labelPrice + "Invalid"]: event.target.value ? false : true,
            }
          : item
      )
    );
  };

  const onSubmitDetails = () => {
    const valid = journeyPrice.find(
      (item) => !item.singleJourneyPrice || !item.returnJourneyPrice
    );
    // const isExits = tollList.find((item) => item.tollName === tollName);
    if (tollName && !valid) {
      const data = {
        tollName: tollName,
        prices: journeyPrice,
      };
      data.prices.forEach((item) => {
        delete item.singleJourneyPriceInvalid;
        delete item.returnJourneyPriceInvalid;
      });
      dispatch(addTollsManagementAction(data));
      props.onCloseAddNewToll();
      resetState();
    }
  };

  return (
    <Modal size="lg" show={props.show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Toll</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="form-label required">Toll Name</label>
        <input
          type="text"
          className={`form-control ${tollNameInvalid ? "is-invalid" : ""}`}
          placeholder="Enter Toll Name"
          value={tollName}
          onChange={onChangeTollName}
        ></input>
        <div className="invalid-feedback">Required</div>
        <div className="mt-4">
          <label className="form-label mb-4 required">
            Vehicle fair details
          </label>
          {journeyPrice.map((vehicle) => {
            return (
              <div
                key={vehicle.id}
                className="row"
                style={{ marginBottom: "10px" }}
              >
                <p className="input-margin col-3 required">{vehicle.name}</p>
                <div className="col-4">
                  <input
                    style={{ marginRight: "10px" }}
                    className={`form-control col-4 ${
                      vehicle.singleJourneyPriceInvalid ? "is-invalid" : ""
                    }`}
                    placeholder="Single Journey"
                    value={vehicle.singleJourneyPrice}
                    type="number"
                    onChange={(event) =>
                      onChangeJourneyPrice(
                        event,
                        vehicle.id,
                        priceLabel.singleJourneyPrice
                      )
                    }
                  ></input>
                  <div className="invalid-feedback">Required</div>
                </div>
                <div className="col-4">
                  <input
                    className={`form-control col-4 ${
                      vehicle.returnJourneyPriceInvalid ? "is-invalid" : ""
                    }`}
                    placeholder="Return Journey"
                    type="number"
                    value={vehicle.returnJourneyPrice}
                    onChange={(event) =>
                      onChangeJourneyPrice(
                        event,
                        vehicle.id,
                        priceLabel.returnJourneyPrice
                      )
                    }
                  ></input>
                  <div className="invalid-feedback">Required</div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmitDetails}>
          Add Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewToll;
