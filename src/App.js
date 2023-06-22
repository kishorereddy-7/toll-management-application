import "./App.css";
import Toaster from "./components/common/toast/Toaster";
import { TollTable } from "./components/toll-table/tollTable";
import MainHeader from "./components/main-header/main-header";

function App() {
  return (
    <div>
      <Toaster />
      <MainHeader />
      <TollTable />
    </div>
  );
}

export default App;
