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
import PrivateRoute from "./components/PrivateRoute";
import DagForm from './pages/DagForm';
import AanwezigheidForm from './pages/AanwezigheidForm';
import LidForm from './pages/LidForm';

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
                <main>
                  <Routes>
                    <Route path="/" exact element={<Navigate to="/dagen" />} />
                    <Route path="/dagen" exact element={
                      <PrivateRoute>
                        <Dagen />
                      </PrivateRoute>} />
                    <Route path="/dagen/add" exact element={
                      <PrivateRoute>
                        <DagForm />
                      </PrivateRoute>} />
                      <Route path="/dagen/:id/add" exact element={
                      <PrivateRoute>
                        <AanwezigheidForm />
                      </PrivateRoute>} />
                    <Route path="/dagen/:id" exact element={
                      <PrivateRoute>
                        <Dag />
                      </PrivateRoute>} />
                    <Route path="/leden" exact element={
                      <PrivateRoute>
                        <Leden />
                      </PrivateRoute>} />
                      <Route path="/leden/add" exact element={
                      <PrivateRoute>
                        <LidForm />
                      </PrivateRoute>} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </Router>
            </AanwezighedenProvider>
          </LedenProvider>
        </DagenProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
