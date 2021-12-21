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
        <p className="voornaam">{voornaam}</p>
        <p className="achternaam">{achternaam}</p>
      </div>
      <Delete handleRemove={handleRemove}></Delete>
    </div>
  );
};