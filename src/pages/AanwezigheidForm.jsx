import React, {useCallback, useContext} from 'react';
import {useParams} from "react-router-dom";
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import {useForm} from "react-hook-form";

export default function AanwezigheidForm()
{
  const {createAanwezigheid, error} = useContext(AanwezighedenContext);
  const {register, handleSubmit} = useForm();
  const {id} = useParams();

  const onSubmit = useCallback(
    async ({dagid, lidid, aanwezig}) => 
    {
      await createAanwezigheid({dagid, lidid, aanwezig});
    }
    ,
    [createAanwezigheid]);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{id}</p>
        <label htmlFor="lidid">Lid-id</label>
        <input id="lidid" type="text" {...register("lidid")} />
        <label htmlFor="aanwezig">Aanwezig(1)/Afwezig(0)</label>
        <input id="aanwezig" type="aanwezig" {...register("aanwezig")} />
        <input type="submit" value="create" />
        {error && <pre className="text-red-600">{error.message}</pre>}
      </form>
    </>
  );
};