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
    <div className="bg-blue-400 text-white">
      <p className="voornaam">{voornaam}</p>
      <p className="achternaam">{achternaam}</p>
      <Delete handleRemove={handleRemove}></Delete>
    </div>
  );
};