import './App.css';
import Dagenlijst from "./components/Dagenlijst"

function App()
{
  const dagen =
  [
    
    {
      datum: "zo 24 okt"
      , aanw: 10
      , afw: 10
    }
    ,
    {
      datum: "zo 31 okt"
      , aanw: 9
      , afw: 12
    }
    ,
    {
      datum: "zo 7 nov"
      , aanw: 9
      , afw: 12
    }
    ,
    {
      datum: "zo 14 nov"
      , aanw: 9
      , afw: 12
    }
    ,
    {
      datum: "zo 21 nov"
      , aanw: 9
      , afw: 12
    }
    ,
    {
      datum: "zo 29 nov"
      , aanw: 9
      , afw: 12
    }
  ]

  return (
    <div className="App">
      <Dagenlijst dagen={dagen}/>
    </div>
  )
}

export default App;
