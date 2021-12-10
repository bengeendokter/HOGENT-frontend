import React, {useCallback, useContext} from 'react';
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import {useForm} from "react-hook-form";

export default function AanwezigheidForm()
{
  const {createAanwezigheid, error} = useContext(AanwezighedenContext);
  const {register, handleSubmit} = useForm();

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
        <label htmlFor="dagid">Dag-id</label>
        <input id="dagid" type="text" {...register("dagid")} />
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