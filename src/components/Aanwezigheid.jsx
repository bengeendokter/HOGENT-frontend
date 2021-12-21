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
    <div className={`${aanwezig ? "clr-pos" : "clr-neg"} aanwezigheid main-container`}>
      <div className="naam">
        <p className="voornaam">{voornaam}</p>
        <p className="achternaam">{achternaam}</p>
      </div>
      <div className="delete-update">
        <Delete handleRemove={handleRemove}></Delete>
          <input type="checkbox" id="aanwezig" checked={aanwezig} onChange={handleUpdate} />
      </div>
    </div>
  );
};