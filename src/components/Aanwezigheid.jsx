import React, {useCallback, useContext} from 'react';
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import Delete from "./buttons/Delete";


export default function Aanwezigheid({props})
{
  const {id, dagid, lidid, aanwezig, voornaam, achternaam} = props;
  const {deleteAanwezigheid, updateAanwezigheid} = useContext(AanwezighedenContext);

  const handleRemove = useCallback(() =>
  {
    deleteAanwezigheid(id);
  }, [deleteAanwezigheid, id]);

  const handleUpdate = useCallback(() =>
  {
    updateAanwezigheid(id, {dagid, lidid, aanwezig: !Boolean(aanwezig)});
  }, [updateAanwezigheid, id, dagid, lidid, aanwezig]);

  return (
    <div className={`${aanwezig ? "bg-green-400" : "bg-red-600"}  text-white`}>
      <p className="voornaam">{voornaam}</p>
      <p className="achternaam">{achternaam}</p>
      <p className="aanwezig">{aanwezig}</p>
      <label htmlFor="aanwezig">
        Aanwezig:
        <input type="checkbox" id="aanwezig" checked={aanwezig} onChange={handleUpdate} />
      </label>
    <Delete handleRemove={handleRemove}></Delete>
    </div>
  );
};