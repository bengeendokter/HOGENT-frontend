import React, {useCallback, useContext} from 'react';
import {useParams} from "react-router-dom";
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import {LedenContext} from '../contexts/LedenProvider';
import {useForm} from "react-hook-form";
import {formatDate} from '../hooks/useFormat';
import {useNavigate} from 'react-router';
import VoegToe from "../components/buttons/VoegToe";

export default function AanwezigheidForm()
{
  const {createAanwezigheid, error, loading} = useContext(AanwezighedenContext);
  const {leden} = useContext(LedenContext);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const {id: dagid} = useParams();
  const history = useNavigate();

  const onSubmit = useCallback(
    async ({lidid, aanwezig}) => 
    {
      if(!loading)
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
    }
    ,
    [createAanwezigheid, dagid, history, loading]);


  return (
    <>
      <h1>{formatDate(dagid)}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="lidid">Lid:</label>
        <select name="lid" id="lidid" {...register("lidid", {required: "dit veld is vereist"})}>
          <option value="">--Kies een optie--</option>
          {leden.map((lid) => <option key={lid.id} value={lid.id}>{lid.voornaam + ' ' + lid.achternaam}</option>)}
        </select>
        {errors["lidid"] && <p>{errors["lidid"].message}</p>}


        <label htmlFor="aanwezig">
          Aanwezig:</label>
          <input type="checkbox" id="aanwezig" {...register("aanwezig")} />
        
        {error && <pre className="text-red-600">dit lid staat al tussen de aanwezigheden</pre>}
        <VoegToe></VoegToe>
      </form>

    </>
  );
};