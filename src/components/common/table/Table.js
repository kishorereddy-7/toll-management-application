import './Table.css'

const Table = (props) => {

  return (
    <table className="table table-hover">
      <thead className="table-light">
        {props.tableHeader.map((head, index) => (
          <th key={index}>{head}</th>
        ))}
      </thead>
      <tbody>
        {props.name.map((item, index) => {
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
}

export default Table