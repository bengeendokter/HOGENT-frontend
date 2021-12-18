import React, { useCallback, useContext } from 'react';
import { AanwezighedenContext } from '../contexts/AanwezighedenProvider';
import { IoTrashOutline } from "react-icons/io5";

export default function Aanwezigheid({props})
{
  const {id, dagid, lidid, aanwezig} = props;
  // TODO onvang meer props van api zoals lidnaam
  const {deleteAanwezigheid, updateAanwezigheid} = useContext(AanwezighedenContext);

  const handleRemove = useCallback(() => {
    deleteAanwezigheid(id);
  }, [deleteAanwezigheid, id]);

  const handleUpdate = useCallback(() => {
    updateAanwezigheid(id, {dagid, lidid, aanwezig: !Boolean(aanwezig)});
  }, [updateAanwezigheid, id, dagid, lidid, aanwezig]);

  return (
    <div className={`${aanwezig ? "bg-green-400" : "bg-red-600"}  text-white`}>      
      <p className="id">{id}</p>
      <p className="dagid">{dagid}</p>
      <p className="lidid">{lidid}</p>
      <p className="aanwezig">{aanwezig}</p>
        <button
              data-cy="transaction_remove_btn"
              onClick={handleRemove}
              className="delete"
            >
              <IoTrashOutline />
        </button>
        <button
              onClick={handleUpdate}
            >
              Update
        </button>
    </div>
  );
};