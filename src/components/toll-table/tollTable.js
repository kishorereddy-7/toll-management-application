import "./tollTable.css";
import Table from "../common/table/Table";
import Header from "../common/header/Header";
import { Button, Card } from "react-bootstrap";
import AddNewToll from "../addnewtoll/AddNewToll";
import { useState } from "react";
import AddNewEntry from "../addnewentry/AddNewEntry";
import { useSelector } from "react-redux";

const tableHeader = [
  "VEHICLE TYPE",
  "VEHICLE NUMBER",
  "DATE/TIME",
  "TOLL NAME",
  "TARIFF",
];

const tollsHeaderList = [
  "TOLL NAME",
  "CAR/JEEP/VAN",
  "LCV",
  "TRUCK/BUS",
  "HEAVY VEHICLE",
];

export const TollTable = () => {
  const [addNewToll, setAddNewToll] = useState(false);
  const [addNewEntry, setAddNewEntry] = useState(false);
  const [isTollgateList, setIsTollgateList] = useState(false);

  const tollList = useSelector((state) => state.tollsList);
  const tollEntryList = useSelector((state) => state.tollEntryList);

  const onClickNewToll = () => {
    setAddNewToll(true);
  };

  const onClickNewEntry = () => {
    setAddNewEntry(true);
  };

  const onCloseAddNewToll = () => {
    setAddNewToll(false);
  };

  const onCloseAddNewEntry = () => {
    setAddNewEntry(false);
  };

  const onClickViewTolls = () => {
    setIsTollgateList((prevState) => {
      return !prevState;
    });
  };
  return (
    <Card>
      <div className="main-header row">
        <Header isTollgateList={isTollgateList} />
        <div className="col-md-6 col-lg-5 pull-right">
          <Button className="button-left mt-2" onClick={onClickNewEntry}>
            Add Vehicle Entry
          </Button>
          <Button className="button-left mt-2" onClick={onClickNewToll}>
            Add New Toll
          </Button>
          <Button className="button-left mt-2" onClick={onClickViewTolls}>
            {isTollgateList ? "Back to vehicle logs" : "View All Tolls"}
          </Button>
          <AddNewToll show={addNewToll} onCloseAddNewToll={onCloseAddNewToll} />
          <AddNewEntry
            show={addNewEntry}
            onCloseAddNewEntry={onCloseAddNewEntry}
          />
        </div>
      </div>
      <Table
        tableHeader={isTollgateList ? tollsHeaderList : tableHeader}
        list={isTollgateList ? tollList : tollEntryList}
        isTollgateList={isTollgateList}
      />
    </Card>
  );
};
