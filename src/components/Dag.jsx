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
    <div className="dag main-container">
        <p className="datum">{formatDate(datum)}</p>
      <div className="aanw-afw">
        <div className="aanw clr-pos">
          <p>{aanwezig}</p>
        </div>
        <div className="afw clr-neg">
          <p>{afwezig}</p>
        </div>
      </div>
      <div className="delete-open">
        <Delete handleRemove={handleRemove}></Delete>
        <Open id={datum}></Open>
      </div>
    </div>
  );
};