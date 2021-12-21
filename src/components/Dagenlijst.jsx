import React, {useContext} from 'react';
import Dag from "./Dag"
import {DagenContext} from '../contexts/DagenProvider';

export default function Dagenlijst()
{
  const {dagen, error, loading} = useContext(DagenContext);

  if(loading) return <h2>Loading...</h2>;

  return (
    <>
      {(error && !dagen) && <pre className="text-red-600">Kan dagen niet ophalen van de server</pre>}
      {!dagen && <p>Er zijn nog geen dagen</p>}
      {dagen.sort((dag1, dag2) => Number(dag2.datum) - Number(dag1.datum))
        .map((dag) => <Dag key={dag.datum} props={dag} />)}
    </>
  );
};