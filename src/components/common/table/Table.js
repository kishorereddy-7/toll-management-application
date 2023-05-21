import "./Table.css";

const Table = (props) => {
  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          {props.tableHeader.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.isTollgateList
          ? props.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.tollName}</td>
                  {item.prices.map((price, index) => {
                    return (
                      <td>
                        {price.singleJourneyPrice}/{price.returnJourneyPrice}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          : props.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.hello}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.toll}</td>
                  <td>{item.tar}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};

export default Table;
