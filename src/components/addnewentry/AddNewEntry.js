import { useState } from "react";
import {
  Modal,
  Button,
  Container,
  FormSelect,
  FormLabel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewTollEntryAction } from "../state/actions/tollEntryManagementAction";
import { dateAndTimeDisplay } from "../commonFuntions/time";
const AddNewEntry = (props) => {
  const [selectedToll, setSelectedToll] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleList, setVehicleList] = useState([]);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [tariff, setTariff] = useState(0);
  const [disableTariff, setDisableTariff] = useState(false);

  const tollNamesList = useSelector((state = {}) => state.tollsList);
  const tollEntryList = useSelector((state = {}) => state.tollEntryList);

  const resetState = () => {
    setVehicleList([]);
    setVehicleNumber("");
    setTariff(0);
    setVehicleType("");
    setDisableTariff(false);
    setSelectedToll("");
  };

  const handleClose = () => {
    props.onCloseAddNewEntry();
    resetState();
  };

  const dispatch = useDispatch();

  const onSelectTollName = (event = {}) => {
    const value = event.target.value;
    setSelectedToll(value);
    if (value) {
      const tollDetails = tollNamesList[event.target.value] || {};
      setVehicleList(tollDetails.prices);
    } else {
      setVehicleList([]);
      setVehicleNumber("");
      setTariff(0);
      setVehicleType("");
      setDisableTariff(false);
    }
  };

  const onSelectVehicle = (event) => {
    setVehicleType(event.target.value);
  };

  const onChangeVehicleNumber = (event) => {
    setVehicleNumber(event.target.value);
    const entryItem = tollEntryList.findIndex(
      (item) => item.vehicleNumber === event.target.value
    );
    if (entryItem >= 0) {
      const todayDate = new Date();
      const tollEntryDetails = tollEntryList[entryItem] || {};
      const timeDifference = todayDate - tollEntryDetails.time;
      const hour = Math.floor(timeDifference / (1000 * 60 * 60));
      if (hour > 1) {
        setTariff(vehicleList[vehicleType].singleJourneyPrice);
      } else {
        setTariff(vehicleList[vehicleType].returnJourneyPrice);
      }
    } else {
      setTariff(vehicleList[vehicleType].singleJourneyPrice);
    }
    setDisableTariff(true);
  };

  const onChangeTariff = (event) => {
    setTariff(event.target.value);
  };

  const onSubmitEntry = () => {
    const data = {
      vehicleType: vehicleType,
      vehicleTypeName: vehicleList[vehicleType].name,
      vehicleNumber: vehicleNumber,
      time: new Date(),
      tollName: tollNamesList[selectedToll].tollName,
      tariff: tariff,
    };

    data.timeDisplay = dateAndTimeDisplay(data.time);

    dispatch(addNewTollEntryAction(data));
    props.onCloseAddNewEntry();
    resetState();
  };

  return (
    <Modal show={props.show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new Entry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <FormLabel className="required">Select toll name</FormLabel>
          <FormSelect
            aria-label="select toll name"
            className="mb-4"
            value={selectedToll}
            onChange={onSelectTollName}
          >
            <option value="">Select toll name</option>
            {tollNamesList.map((toll = {}, index) => {
              return (
                <option key={index} value={index}>
                  {toll.tollName}
                </option>
              );
            })}
          </FormSelect>
          <FormLabel className="required">Select vehicle type</FormLabel>
          <FormSelect
            aria-label="select vehicle type"
            value={vehicleType}
            className="mb-4"
            onChange={onSelectVehicle}
          >
            <option value="">Select vehicle type</option>
            {vehicleList.map((toll = {}, index) => {
              return (
                <option key={index} value={index}>
                  {toll.name}
                </option>
              );
            })}
          </FormSelect>
          <FormLabel className="required">Vehicle Number</FormLabel>
          <input
            className="form-control mb-2"
            value={vehicleNumber}
            onChange={onChangeVehicleNumber}
          />
          <FormLabel className="required">Tariff</FormLabel>
          <input
            className="form-control"
            value={tariff}
            disabled={disableTariff}
            onChange={onChangeTariff}
          />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmitEntry}>
          Add Entry
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewEntry;
