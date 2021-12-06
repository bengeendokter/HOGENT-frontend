import { DagenProvider } from './contexts/DagenProvider';
import './App.css';
import Dagenlijst from "./components/Dagenlijst"
import DagForm from './components/DagForm';


function App()
{

  return (
    <div className="App">
      <DagenProvider>
        <DagForm></DagForm>
        <Dagenlijst/>
      </DagenProvider>
    </div>
  )
}

export default App;
