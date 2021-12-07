import { DagenProvider } from './contexts/DagenProvider';
import { LedenProvider } from './contexts/LedenProvider';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dagen from './pages/Dagen';
import Dag from './pages/Dag';
import NotFound from './pages/NotFound';
import Leden from './pages/Leden'

function App()
{

  return (
    <div className="App">
      <DagenProvider>
      <LedenProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Navigate to="/dagen" />}/>

            <Route path="/dagen" exact element={<Dagen/>}/>

            <Route path="/dagen/:id" exact element={<Dag/>}/>

            <Route path="/leden" exact element={<Leden/>}></Route>

            <Route path="*" element={<NotFound/>}/>    
          </Routes>
        </Router>
      </LedenProvider>
      </DagenProvider>
    </div>
  )
}

export default App;
