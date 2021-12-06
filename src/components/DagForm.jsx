import React, { useCallback, useContext } from 'react';
import { DagenContext } from '../contexts/DagenProvider';
import { useForm, } from "react-hook-form";

export default function DagForm()
{
  const {createTransaction} = useContext(DagenContext);
  const {register, handleSubmit} = useForm();

	const onSubmit = useCallback(
    async ({id}) => 
    {
		await createTransaction({id});
    }
    ,
    [createTransaction]);


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="dateid">Date</label>
      <input id="dateid" type="text" {...register("id")}/>
      <input type="submit" value="create"/>
    </form>
    </>
  );
};