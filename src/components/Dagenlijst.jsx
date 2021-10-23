import React from 'react';
import Dag from "./Dag"

export default function Dagenlijst({dagen})
{
  return (
    <div className="dagenlijst">
      {dagen.map((dag) => <Dag props={dag} />)}
    </div>
  );
};