import React, {useCallback, useContext} from 'react';
import {useNavigate} from 'react-router';
import {DagenContext} from '../contexts/DagenProvider';
import {useForm, } from "react-hook-form";

export default function DagForm()
{
  const {createDag} = useContext(DagenContext);
  const {register, handleSubmit} = useForm();
  const history = useNavigate();

  const onSubmit = useCallback(
    async ({date}) => 
    {
      const id = date.replaceAll("-", "");
      try
      {
        await createDag({id});
        history("/dagen");
      }
      catch(error)
      {
        console.error(error);
      }
    }
    ,
    [createDag, history]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="dateid">Date</label>
        <input id="dateid" type="date" defaultValue={toDateInputValue()} {...register("date")} />
        <input type="submit" value="create" />
      </form>
    </>
  );
};