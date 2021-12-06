import React, { useCallback, useContext } from 'react';
import { DagenContext } from '../contexts/DagenProvider';
import { IoTrashOutline } from "react-icons/io5";

export default function Dag({props})
{
  const {datum, aanwezig, afwezig} = props;
  const {deleteDagen} = useContext(DagenContext);

  const handleRemove = useCallback(() => {
    deleteDagen(datum);
  }, [deleteDagen, datum]);

  return (
    <div className="dag bg-blue-400 text-white">      
      <div className="dag-delete">
      <p className="datum">{datum}</p>
        <button
              data-cy="transaction_remove_btn"
              onClick={handleRemove}
              className="delete"
            >
              <IoTrashOutline />
        </button>
      </div>
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