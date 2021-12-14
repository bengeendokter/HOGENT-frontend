import {DagenProvider} from './contexts/DagenProvider';
import {LedenProvider} from './contexts/LedenProvider';
import {AuthProvider} from "./contexts/AuthProvider";
import Login from "./pages/Login";
import {AanwezighedenProvider} from './contexts/AanwezighedenProvider';
import './App.css';
import
{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dagen from './pages/Dagen';
import Dag from './pages/Dag';
import NotFound from './pages/NotFound';
import Leden from './pages/Leden'
import NavMenu from './components/NavMenu';

function App()
{

  return (
    <div className="App">
      <AuthProvider>
        <DagenProvider>
          <LedenProvider>
            <AanwezighedenProvider>
              <Router>
                <NavMenu />
                <Routes>
                  <Route path="/" exact element={<Navigate to="/dagen" />} />

                  <Route path="/dagen" exact element={<Dagen />} />

                  <Route path="/dagen/:id" exact element={<Dag />} />

                  <Route path="/leden" exact element={<Leden />}/>

                  <Route path="/login" exact element={<Login />}/>

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
            </AanwezighedenProvider>
          </LedenProvider>
        </DagenProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
