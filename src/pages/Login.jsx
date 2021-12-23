import React, {useCallback} from 'react';
import {useNavigate, Navigate} from 'react-router';
import {useForm, } from "react-hook-form";
import {useLogin, useSession} from '../contexts/AuthProvider';
import VoegToe from "../components/buttons/VoegToe";

export default function Login()
{
    const {loading, error, isAuthed} = useSession();
    const history = useNavigate();
    const login = useLogin();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = useCallback(
        async ({email, password}) => 
        {
            if(!loading)
            {
                try
                {
                    const success = await login(email, password);

                    if(success)
                    {
                        // we kunnen niet op terug duwen om terug naar de login te gaan
                        history('/', {replace: true});
                    }
                }
                catch(error)
                {
                    console.error(error);
                }
            }
        }, [history, login, loading]);

    if(isAuthed)
    {
        return <Navigate from="/login" to="/" />
    }

    return (
        <>
            {loading && <h2>Laden...</h2>}
            <form className='main-container' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input id="email" data-cy="email_input" type="email" {...register("email", {required: "dit veld is vereist"})} />
                {errors["email"] && <strong>{errors["email"].message}</strong>}
                <label htmlFor="password">Wachtwoord</label>
                <input id="password" data-cy="password_input" type="password" {...register("password", {required: "dit veld is vereist"})} />
                {errors["password"] && <strong>{errors["password"].message}</strong>}
                {
                    error && <strong>de combinatie van email en wachtwoord is niet correct</strong>
                }
                <VoegToe label="Login" isDisabled={loading} data-cy="submit_btn" ></VoegToe>
            </form>
        </>
    );
};