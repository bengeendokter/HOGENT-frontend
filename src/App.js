import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import Dagenlijst from "./components/Dagenlijst"

function App()
{
  // const dagen =
  // [

  //   {
  //     datum: 20211024
  //     , aanwezig: 10
  //     , afwezig: 10
  // }
  // , {
  //     datum: 20211031
  //     , aanwezig: 9
  //     , afwezig: 12
  // }
  // ]

  const [dagen, setDagen] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getDagen = async () =>
  {
    try
    {
      setError('');
      setLoading(true);
      const response = await axios.get('http://localhost:9000/api/dagen');
      setDagen(response.data.data);
    }
    catch(err)
    {
      setError(err);
    }
    finally
    {
			setLoading(false);
		}
  };

  useEffect(() => {
		getDagen();
	}, []); 


  if (loading) return <h1>Loading...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="App">
      <Dagenlijst dagen={dagen} />
    </div>
  )
}

export default App;
