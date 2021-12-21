import React, {useCallback, useContext} from 'react';
import {useParams} from "react-router-dom";
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import {LedenContext} from '../contexts/LedenProvider';
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router';

export default function AanwezigheidForm()
{
  const {createAanwezigheid, error} = useContext(AanwezighedenContext);
  const {leden} = useContext(LedenContext);
  const {register, handleSubmit} = useForm();
  const {id: dagid} = useParams();
  const history = useNavigate();

  const onSubmit = useCallback(
    async ({lidid, aanwezig}) => 
    {
      try
      {
        await createAanwezigheid({dagid, lidid, aanwezig});
        history(`/dagen/${dagid}`);
      }
      catch(error)
      {
        console.error(error);
      }
    }
    ,
    [createAanwezigheid, dagid, history]);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{dagid}</p>

        <label htmlFor="lidid">Lid:</label>
        <select name="lid" id="lidid" {...register("lidid")}>
          <option value="">--Kies een optie--</option>
          {leden.map((lid) => <option key={lid.id} value={lid.id}>{lid.voornaam + ' ' + lid.achternaam}</option>)}
        </select>


        <label htmlFor="aanwezig">
          Aanwezig:
          <input type="checkbox" id="aanwezig" {...register("aanwezig")} />
        </label>

        <input type="submit" value="create" />
        {error && <pre className="text-red-600">{error.message}</pre>}
      </form>

    </>
  );
};