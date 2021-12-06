import { DagenProvider } from './contexts/DagenProvider';
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

function App()
{

  return (
    <div className="App">
      <DagenProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Navigate to="/dagen" />}/>

            <Route path="/dagen" exact element={<Dagen/>}/>

            <Route path="/dagen/:id" exact element={<Dag/>}/>

            <Route path="*" element={<NotFound/>}/>    
          </Routes>
        </Router>
      </DagenProvider>
    </div>
  )
}

export default App;
