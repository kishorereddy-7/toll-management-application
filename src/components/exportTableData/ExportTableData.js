import * as XLSX from "xlsx";
import "./ExportTableDataStyle.css";

const ExportTableData = (props) => {
  const onClickExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.table_to_sheet(
      document.getElementById("tollTable")
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, props.fileName + ".xlsx");
  };
  return (
    <div className="export-container">
      <button onClick={onClickExcel} className="excel-button">
        Excel
      </button>
    </div>
  );
};

export default ExportTableData;
