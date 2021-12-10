import React, { useCallback, useContext } from 'react';
import { LedenContext } from '../contexts/LedenProvider';
import { IoTrashOutline } from "react-icons/io5";

export default function Lid({props})
{
  const {id, voornaam, achternaam} = props;
  const {deleteLid} = useContext(LedenContext);

  const handleRemove = useCallback(() => {
    deleteLid(id);
  }, [deleteLid, id]);

  return (
    <div className="bg-blue-400 text-white">    
      <p className="id">{id}</p>  
      <p className="voornaam">{voornaam}</p>
      <p className="achternaam">{achternaam}</p>
        <button
              data-cy="transaction_remove_btn"
              onClick={handleRemove}
              className="delete"
            >
              <IoTrashOutline />
        </button>
    </div>
  );
};