import './App.css';
import Dagenlijst from "./components/Dagenlijst"

function App()
{
  const dag1 =
  {
    datum: "zo 24 okt"
    , aanw: 10
    , afw: 10
  };

  const dag2 =
  {
    datum: "zo 31 okt"
    , aanw: 9
    , afw: 12
  };

  const DAGEN = [dag1, dag2];

  return (
    <div className="App">
      <Dagenlijst dagen={DAGEN}/>
    </div>
  )
}

export default App;
