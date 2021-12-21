import React, {useCallback, useContext} from 'react';
import {LedenContext} from '../contexts/LedenProvider';
import {useForm, } from "react-hook-form";
import {useNavigate} from 'react-router';
import VoegToe from "../components/buttons/VoegToe";

export default function DagForm()
{
  const {createLid, loading} = useContext(LedenContext);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const history = useNavigate();

  const onSubmit = useCallback(
    async ({voornaam, achternaam}) => 
    {
      if(!loading)
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
    }
    ,
    [createLid, history, loading]);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="voornaam">Voornaam</label>
        <input id="voornaam" type="text" {...register("voornaam", {required: "dit veld is vereist", pattern:{ value: /^[a-zA-Z]*$/, message:"een naam mag enkel letters bevatten"}})} />
        {errors["voornaam"] && <p>{errors["voornaam"].message}</p>}
        <label htmlFor="achternaam">Achternaam</label>
        <input id="achternaam" type="text" {...register("achternaam", {required: "dit veld is vereist", pattern:{ value: /^[a-zA-Z]*$/, message:"een naam mag enkel letters bevatten"}})} />
        {errors["achternaam"] && <p>{errors["achternaam"].message}</p>}
        <VoegToe isDisabled={loading} ></VoegToe>
      </form>
    </>
  );
};