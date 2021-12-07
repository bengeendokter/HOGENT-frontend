import React, { useContext } from 'react';
import Lid from "./Lid"
import { LedenContext } from '../contexts/LedenProvider';

export default function Ledenlijst()
{
  const { leden, error, loading } = useContext(LedenContext);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre className="text-red-600">{error.message}</pre>
  if (!leden) return null;

  return (
    <div className="ledenlijst">
      {leden.map((lid) => <Lid key={lid.id} props={lid} />)}
    </div>
  );
};