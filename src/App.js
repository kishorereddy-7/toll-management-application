import "./App.css";
import Toaster from "./components/common/toast/Toaster";
import { TollTable } from "./components/toll-table/tollTable";

function App() {
  return (
    <div>
      <Toaster />
      <header className="header-bottom p-2">
        <h2>Toll Management Application</h2>
      </header>
      <TollTable />
    </div>
  );
}

export default App;
