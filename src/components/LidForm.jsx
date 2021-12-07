import React, { useCallback, useContext } from 'react';
import { LedenContext } from '../contexts/LedenProvider';
import { useForm, } from "react-hook-form";

export default function DagForm()
{
  const {createLid} = useContext(LedenContext);
  const {register, handleSubmit} = useForm();

	const onSubmit = useCallback(
    async ({voornaam, achternaam}) => 
    {
		await createLid({voornaam, achternaam});
    }
    ,
    [createLid]);


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="voornaam">Voornaam</label>
      <input id="voornaam" type="text" {...register("voornaam")}/>
      <label htmlFor="achternaam">Achternaam</label>
      <input id="achternaam" type="text" {...register("achternaam")}/>
      <input type="submit" value="create"/>
    </form>
    </>
  );
};