import './App.css';
import { TollTable } from './components/toll-table/tollTable';

function App() {
  return (
    <div>
      <header className="header-bottom p-2">
        <h2>Toll Management Application</h2>
      </header>
      <TollTable />
    </div>
  );
}

export default App;
