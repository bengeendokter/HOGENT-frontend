import axios from 'axios';
import {useState, useEffect, createContext} from 'react';
import { DagenProvider } from './contexts/DagenProvider';
import './App.css';
import Dagenlijst from "./components/Dagenlijst"


function App()
{

  return (
    <div className="App">
      <DagenProvider>
          <Dagenlijst/>
      </DagenProvider>
    </div>
  )
}

export default App;
