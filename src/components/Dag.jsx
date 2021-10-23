import React from 'react';

export default function Dag({props})
{
  const {datum, aanw, afw} = props;

  return (
    <div className="dag">
      <p>{datum}</p>
      <div className="bg-green-400">
        <p>{aanw}</p>
      </div>
      <div className="bg-red-400">
        <p>{afw}</p>
      </div>
    </div>
  );
};