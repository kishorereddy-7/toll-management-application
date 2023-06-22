export const tollCenterIntialState = [
  {
    id: 1,
    name: "Car/Jeep/Van",
    singleJourneyPrice: "",
    returnJourneyPrice: "",
    singleJourneyPriceInvalid: false,
    returnJourneyPriceInvalid: false,
  },
  {
    id: 2,
    name: "LCV",
    singleJourneyPrice: "",
    returnJourneyPrice: "",
    singleJourneyPriceInvalid: false,
    returnJourneyPriceInvalid: false,
  },
  {
    id: 3,
    name: "Truck/Bus",
    singleJourneyPrice: "",
    returnJourneyPrice: "",
    singleJourneyPriceInvalid: false,
    returnJourneyPriceInvalid: false,
  },
  {
    id: 4,
    name: "Heavy vehicle",
    singleJourneyPrice: "",
    returnJourneyPrice: "",
    singleJourneyPriceInvalid: false,
    returnJourneyPriceInvalid: false,
  },
];

export const toastStatus = {
  success: "success",
  error: "danger",
};

export const tollEntryHeader = [
  "VEHICLE TYPE",
  "VEHICLE NUMBER",
  "DATE/TIME",
  "TOLL NAME",
  "TARIFF",
];

export const tollsHeaderList = [
  "TOLL NAME",
  "CAR/JEEP/VAN",
  "LCV",
  "TRUCK/BUS",
  "HEAVY VEHICLE",
];

export const tollEntryFilters = [
  {
    key: "vehicleTypeName",
    placeHolder: "Search Vehicle Type",
  },
  {
    key: "vehicleNumber",
    placeHolder: "Search Vehicle Number",
  },
  {
    key: "vehicleNumber",
  },
  {
    key: "tollName",
    placeHolder: "Search Toll Name",
  },
  {
    key: "tariff",
    placeHolder: "Search Tariff",
  },
];
