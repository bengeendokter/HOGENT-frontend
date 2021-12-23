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
      {loading && <h2>Laden...</h2>}
      <form className='main-container lid-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="voornaam">Voornaam</label>
        <input id="voornaam" type="text" data-cy="voornaam_input" {...register("voornaam", {required: "dit veld is vereist", pattern:{ value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, message:"een naam mag enkel letters bevatten"}})} />
        {errors["voornaam"] && <strong>{errors["voornaam"].message}</strong>}
        <label htmlFor="achternaam">Achternaam</label>
        <input id="achternaam" type="text" data-cy="achternaam_input" {...register("achternaam", {required: "dit veld is vereist", pattern:{ value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, message:"een naam mag enkel letters bevatten"}})} />
        {errors["achternaam"] && <strong>{errors["achternaam"].message}</strong>}
        <VoegToe isDisabled={loading} data-cy="voeg_toe_lid" ></VoegToe>
      </form>
    </>
  );
};