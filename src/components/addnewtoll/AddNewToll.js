import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { addTollsManagementAction } from "../state/actions/tollsManagementAction";
import { toastStatus, tollCenterIntialState } from "../common/contants";
import { showToastAction } from "../state/actions/toastDetailsAction";

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
    if (tollName) {
      const valid = journeyPrice.findIndex(
        (item) => !item.singleJourneyPrice || !item.returnJourneyPrice
      );
      // const isExits = tollList.find((item) => item.tollName === tollName);
      if (tollName && valid < 0) {
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
      } else {
        setJourneyPrice((prevState) =>
          prevState.map((item, i) =>
            i === valid
              ? {
                  ...item,
                  [priceLabel.singleJourneyPrice + "Invalid"]:
                    item.singleJourneyPrice ? false : true,
                  [priceLabel.returnJourneyPrice + "Invalid"]:
                    item.returnJourneyPrice ? false : true,
                }
              : item
          )
        );
      }
    } else {
      setTollNameInvalid(true);
      dispatch(
        showToastAction({
          header: "AddNewToll",
          descrption: "Please enter Toll Name",
          type: toastStatus.error,
        })
      );
    }
  };

  return (
    <Modal show={props.show} onHide={handleClose} centered>
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
                <p className="input-margin col-md-4 col-12 required">
                  {vehicle.name}
                </p>
                <div className="col-md-4 col-12">
                  <input
                    style={{ marginRight: "10px" }}
                    className={`form-control mb-2 col-4 ${
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
                <div className="col-md-4 col-12">
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
