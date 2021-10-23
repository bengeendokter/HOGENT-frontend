import React from 'react';

export default function Dag({props})
{
  const {datum, aanw, afw} = props;

  return (
    <div className="dag bg-blue-400 text-white">
      <p className="datum">{datum}</p>
      <div className="aanw-afw">
        <div className="aanw bg-green-400">
          <p>{aanw}</p>
        </div>
        <div className="afw bg-red-400">
          <p>{afw}</p>
        </div>
      </div>
    </div>
  );
};