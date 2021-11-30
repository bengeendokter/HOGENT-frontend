import React from 'react';

export default function Dag({props})
{
  const {datum, aanwezig, afwezig} = props;

  return (
    <div className="dag bg-blue-400 text-white">
      <p className="datum">{datum}</p>
      <div className="aanw-afw">
        <div className="aanw bg-green-400">
          <p>{aanwezig}</p>
        </div>
        <div className="afw bg-red-400">
          <p>{afwezig}</p>
        </div>
      </div>
    </div>
  );
};