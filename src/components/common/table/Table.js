import { useEffect, useState } from "react";
import "./Table.css";

const Table = (props) => {
  const [tableData, setTableData] = useState(props.list);
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

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filterData = props.list.filter((item) =>
        filters.vehicleNumber
          ? item.vehicleNumber
              .toLowerCase()
              .includes(filters.vehicleNumber.toLowerCase())
          : true && filters.vehicleTypeName
          ? item.vehicleTypeName
              .toLowerCase()
              .includes(filters.vehicleTypeName.toLowerCase())
          : true && filters.tollName
          ? item.tollName.toLowerCase().includes(filters.tollName.toLowerCase())
          : true && filters.tariff
          ? item.tariff.toLowerCase().includes(filters.tariff.toLowerCase())
          : true && filters.date
          ? item.time.getUTCFullYear() === (new Date(filters.date)).getUTCFullYear() &&
            item.time.getUTCMonth() === (new Date(filters.date)).getUTCMonth() &&
            item.time.getUTCDate() === (new Date(filters.date)).getUTCDate() &&
            item.time.getUTCHours() === (new Date(filters.date)).getUTCHours() &&
            item.time.getUTCMinutes() === (new Date(filters.date)).getUTCMinutes()
          : true
      );
      setTableData(filterData);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [filters, props.list]);

  const onChangeFilter = (event, filter) => {
    setFilters((preState) => {
      return {
        ...preState,
        [filter.key]: event.target.value,
      };
    });
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
    <table className="custom-table table-sm">
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
                type={filter.type}
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
