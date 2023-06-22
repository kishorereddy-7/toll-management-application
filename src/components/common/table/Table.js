import { useEffect, useState } from "react";
import "./Table.css";

const Table = (props) => {
  const [tableData, setTableData] = useState(props.list);
  const [debounce, setDebounce] = useState(null);
  const [filters, setFilters] = useState({
    vehicleTypeName: "",
    vehicleNumber: "",
    date: "",
    tollName: "",
    tariff: "",
  });

  useEffect(() => {
    setTableData(props.list);
  }, [props.list]);

  const searchTableData = (value, filter) => {
    const filterData = props.list.filter((item) =>
      value ? item[filter.key].includes(value) : true
    );
    setTableData(filterData);
  };

  const onChangeFilter = (event, filter) => {
    setFilters((preState) => {
      return {
        ...preState,
        [filter.key]: event.target.value,
      };
    });
    clearTimeout(debounce);
    const newDebounce = setTimeout(() => {
      searchTableData(event.target.value, filter);
    }, 500);
    setDebounce(newDebounce);
  };

  const tableDataRender = () => {
    if (tableData.length) {
      if (props.isTollgateList) {
        return tableData.map((item = { prices: [] }, index) => (
          <tr key={index}>
            <td>{item.tollName}</td>
            {item.prices &&
              item.prices.map((price, index) => {
                return (
                  <td key={index}>
                    {price.singleJourneyPrice}/{price.returnJourneyPrice}
                  </td>
                );
              })}
          </tr>
        ));
      } else {
        return tableData.map((item = {}, index) => (
          <tr key={index}>
            <td>{item.vehicleTypeName}</td>
            <td>{item.vehicleNumber}</td>
            <td>{item.timeDisplay}</td>
            <td>{item.tollName}</td>
            <td>{item.tariff}</td>
          </tr>
        ));
      }
    } else {
      return;
    }
  };

  return (
    <table className="custom-table">
      <thead className="table-light">
        <tr>
          {props.tableHeader.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
        <tr>
          {props.filters.map((filter, index) => (
            <td key={index}>
              <input
                className="custom-input"
                placeholder={filter.placeHolder}
                value={filters[filter.key]}
                onChange={(e) => onChangeFilter(e, filter)}
              />
            </td>
          ))}
        </tr>
      </thead>
      <tbody>{tableDataRender()}</tbody>
    </table>
  );
};

export default Table;
