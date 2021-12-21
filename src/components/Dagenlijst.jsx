import React, { useContext } from 'react';
import Dag from "./Dag"
import { DagenContext } from '../contexts/DagenProvider';

export default function Dagenlijst()
{
  const { dagen, error, loading } = useContext(DagenContext);

  if (loading) return <h1>Loading...</h1>;
  if (error)
  {
    return <pre className="text-red-600">{error.message}</pre>
  }
  if (!dagen) return null;

  return (
    <div className="dagenlijst">
      {dagen.sort((dag1, dag2) => Number(dag2.datum) - Number(dag1.datum))
      .map((dag) => <Dag key={dag.datum} props={dag} />)}
    </div>
  );
};