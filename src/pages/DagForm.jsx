import React, {useCallback, useContext} from 'react';
import {useNavigate} from 'react-router';
import {DagenContext} from '../contexts/DagenProvider';
import {useForm, } from "react-hook-form";
import VoegToe from "../components/buttons/VoegToe";

export default function DagForm()
{
  const {createDag, error, loading} = useContext(DagenContext);
  const {register, handleSubmit, formState: { errors }} = useForm();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="dateid">Date</label>
        <input id="dateid" type="date" defaultValue={toDateInputValue()} {...register("date", {required: "dit veld is vereist",pattern:{ value: /^[0-9]{8}$/, message:"vul een datum in"}})} />
        {error && <pre className="text-red-600">Deze dag bestaat al</pre>}
        {errors["dateid"] && <p>{errors["dateid"].message}</p>}
        <VoegToe isDisabled={loading} ></VoegToe>
      </form>
    </>
  );
};