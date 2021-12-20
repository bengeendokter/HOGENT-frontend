import React, {useCallback, useContext} from 'react';
import {useParams} from "react-router-dom";
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import {LedenContext} from '../contexts/LedenProvider';
import {useForm} from "react-hook-form";

export default function AanwezigheidForm()
{
  const {createAanwezigheid, error} = useContext(AanwezighedenContext);
  const {leden} = useContext(LedenContext);
  const {register, handleSubmit} = useForm();
  const {id: dagid} = useParams();

  const onSubmit = useCallback(
    async ({lidid, aanwezig}) => 
    {
      await createAanwezigheid({dagid, lidid, aanwezig});
    }
    ,
    [createAanwezigheid, dagid]);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{dagid}</p>
        
        <label htmlFor="lidid">Lid:</label>
        <select name="lid" id="lidid" {...register("lidid")}>
          <option value="">--Kies een optie--</option>
          {leden.map((lid) => <option key={lid.id} value={lid.id}>{lid.voornaam + ' ' + lid.achternaam}</option>)}
        </select>

        <label htmlFor="aanwezig">Aanwezig(1)/Afwezig(0)</label>
        <input id="aanwezig" type="aanwezig" {...register("aanwezig")} />
        <input type="submit" value="create" />
        {error && <pre className="text-red-600">{error.message}</pre>}
      </form>
    </>
  );
};