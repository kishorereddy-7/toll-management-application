import "./tollTable.css";
import Table from "../common/table/Table";
import Header from "../common/header/Header";
import { Button, Card } from "react-bootstrap";
import AddNewToll from "../addnewtoll/AddNewToll";
import { useState } from "react";
import AddNewEntry from "../addnewentry/AddNewEntry";
import { useSelector } from "react-redux";
import {
  tollEntryFilters,
  tollEntryHeader,
  tollsHeaderList,
} from "../common/contants";

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
    <div className="background-lav">
      <div className="main-header">
        <Header isTollgateList={isTollgateList} />
        <div>
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
      <Card className="card-wrapper">
        {isTollgateList ? (
          <Table
            tableHeader={tollsHeaderList}
            list={tollList}
            filters={[]}
            isTollgateList={isTollgateList}
          />
        ) : (
          <Table
            tableHeader={tollEntryHeader}
            list={tollEntryList}
            filters={tollEntryFilters}
            isTollgateList={isTollgateList}
          />
        )}
      </Card>
    </div>
  );
};
