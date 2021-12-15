import React, {useCallback} from 'react';
import {useNavigate, Navigate} from 'react-router';
import {useForm, } from "react-hook-form";
import {useLogin, useSession} from '../contexts/AuthProvider';

export default function Login()
{
    const {loading, error, isAuthed} = useSession();
    const history = useNavigate();
    const login = useLogin();

    const {register, handleSubmit} = useForm();

    const onSubmit = useCallback(
        async ({email, password}) => 
        {
            const success = await login(email, password);

            if(success)
            {
                // we kunnen niet op terug duwen om terug naar de login te gaan
                history('/', { replace: true });
            }
        }, [history, login]);

    if(isAuthed)
    {
        return <Navigate from="/login" to="/" />
    }

    return (
        <>
            {
                error ? (
                    <p className="text-red-500">
                        {error}
                    </p>
                ) : null
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...register("password")} />
                <input type="submit" disabled={loading} value="login" />
            </form>
        </>
    );
};