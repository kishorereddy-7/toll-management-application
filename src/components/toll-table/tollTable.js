import "./tollTable.css";
import Table from "../common/table/Table";
import Header from "../common/header/Header";
import { Button } from "react-bootstrap";
import AddNewToll from "../addnewtoll/AddNewToll";
import { useState } from "react";
import AddNewEntry from "../addnewentry/AddNewEntry";

const tableHeader = [
  "VEHICLE TYPE",
  "VEHICLE NUMBER",
  "DATE/TIME",
  "TOLL NAME",
  "TARIFF",
];

const tableData = [
  { hello: "hello", name: "name", date: "07", toll: "toll", tar: "30" },
  { hello: "hello", name: "name", date: "07", toll: "toll", tar: "30" },
];

export const TollTable = () => {

  const [addNewToll, setAddNewToll] = useState(false)
  const [addNewEntry, setAddNewEntry] = useState(false)
  const [isTollgateList, setIsTollgateList] = useState(false)

  const onClickNewToll = () => {
    setAddNewToll(true)
  }

  const onClickNewEntry = () => {
    setAddNewEntry(true)
  }

  const onCloseAddNewToll = () => {
    setAddNewToll(false)
  }

  const onCloseAddNewEntry = () => {
    setAddNewEntry(false)
  }

  const onClickViewTolls = () => {
    setIsTollgateList(true)
  }
  return (
    <div>
      <div className="main-header d-flex justify-content-between">
        <Header isTollgateList={isTollgateList} />
        <div>
          <Button className="button-left" onClick={onClickNewToll}>
            Add Vehicle Entry
          </Button>
          <Button className="button-left" onClick={onClickNewEntry}>
            Add New Toll
          </Button>
          <Button className="button-left" onClick={onClickViewTolls}>
            View All Tolls
          </Button>
          <AddNewToll show={addNewToll} onCloseAddNewToll={onCloseAddNewToll} />
          <AddNewEntry
            show={addNewEntry}
            onCloseAddNewEntry={onCloseAddNewEntry}
          />
        </div>
      </div>
      {isTollgateList ? (
        ""
      ) : (
        <Table tableHeader={tableHeader} name={tableData} />
      )}
    </div>
  );
};
