import React, {useCallback, useContext} from 'react';
import {LedenContext} from '../contexts/LedenProvider';
import {useForm, } from "react-hook-form";
import {useNavigate} from 'react-router';

export default function DagForm()
{
  const {createLid} = useContext(LedenContext);
  const {register, handleSubmit} = useForm();
  const history = useNavigate();

  const onSubmit = useCallback(
    async ({voornaam, achternaam}) => 
    {
      try
      {
        await createLid({voornaam, achternaam});
        history("/leden");
      }
      catch(error)
      {
        console.error(error);
      }
    }
    ,
    [createLid, history]);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="voornaam">Voornaam</label>
        <input id="voornaam" type="text" {...register("voornaam")} />
        <label htmlFor="achternaam">Achternaam</label>
        <input id="achternaam" type="text" {...register("achternaam")} />
        <input type="submit" value="create" />
      </form>
    </>
  );
};