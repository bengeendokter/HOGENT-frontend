import React, {useCallback, useContext} from 'react';
import {DagenContext} from '../contexts/DagenProvider';
import { formatDate } from '../hooks/useFormat';
import Open from "./buttons/Open";
import Delete from "./buttons/Delete";

export default function Dag({props})
{

  const {datum, aanwezig, afwezig} = props;
  const {deleteDag} = useContext(DagenContext);

  const handleRemove = useCallback(() =>
  {
    deleteDag(datum);
  }, [deleteDag, datum]);

  return (
    <div className="dag bg-blue-400 text-white">
      <div className="dag-delete">
        <p className="datum">{formatDate(datum)}</p>

      </div>
      <div className="aanw-afw">
        <div className="aanw bg-green-400">
          <p>{aanwezig}</p>
        </div>
        <div className="afw bg-red-400">
          <p>{afwezig}</p>
        </div>
      </div>
      <Delete handleRemove={handleRemove}></Delete>
      <Open id={datum}></Open>
    </div>
  );
};