import "./App.css";
import Toaster from "./components/common/toast/Toaster";
import { TollTable } from "./components/toll-table/tollTable";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div>
      <Toaster />
      <header className="row header-bottom p-2">
        <h2 className="col-sm-12 col-md-8">Toll Management Application</h2>
        <Timer />
      </header>
      <TollTable />
    </div>
  );
}

export default App;
