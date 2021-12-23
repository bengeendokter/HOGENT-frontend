import React, { useCallback, useContext } from 'react';
import { LedenContext } from '../contexts/LedenProvider';
import Delete from "./buttons/Delete";

export default function Lid({props})
{
  const {id, voornaam, achternaam} = props;
  const {deleteLid} = useContext(LedenContext);

  const handleRemove = useCallback(() => {
    deleteLid(id);
  }, [deleteLid, id]);

  return (
    <div className="lid main-container">
      <div className="naam">
        <p className="voornaam" data-cy="voornaam">{voornaam}</p>
        <p className="achternaam" data-cy="achternaam">{achternaam}</p>
      </div>
      <Delete data-cy="lid_delete" handleRemove={handleRemove}></Delete>
    </div>
  );
};