import React, {useCallback, useContext} from 'react';
import {useNavigate} from 'react-router';
import {DagenContext} from '../contexts/DagenProvider';
import {useForm, } from "react-hook-form";
import VoegToe from "../components/buttons/VoegToe";

export default function DagForm()
{
  const {createDag, error, loading} = useContext(DagenContext);
  const {register, handleSubmit} = useForm();
  const history = useNavigate();

  const onSubmit = useCallback(
    async ({date}) => 
    {
      if(!loading)
      {
        const id = date.replaceAll("-", "");
        try
        {
          await createDag({id});
          history("/dagen");
        }
        catch(err)
        {
          console.error(err);
        }
      }
    }
    ,
    [createDag, history, loading]);

  const toDateInputValue = useCallback(
    () => 
    {
      var local = new Date();
      local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
      return local.toJSON().slice(0, 10);
    }
    ,
    []);


  return (
    <>
      {loading && <h2>Laden...</h2>}
      <form className='main-container' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="dateid">Date</label>
        <input id="dateid" type="date" defaultValue={toDateInputValue()} {...register("date")} />
        {error && <strong>deze dag bestaat al</strong>}
        <VoegToe isDisabled={loading} ></VoegToe>
      </form>
    </>
  );
};