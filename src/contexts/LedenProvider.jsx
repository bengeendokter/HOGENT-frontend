import {createContext, useState, useEffect, useCallback} from 'react';
import * as ledenApi from '../api/leden';
import { useSession } from './AuthProvider';

export const LedenContext = createContext();

export const LedenProvider = ({children}) =>
{
    const { ready: authReady } = useSession();
    const [leden, setLeden] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const refreshLeden = useCallback(async () =>
    {
        try
        {
            setError();
            setLoading(true);
            const {data} = await ledenApi.getAllLeden();
            setLeden(data.data);
        } catch(error)
        {
            setError(error)
        } finally
        {
            setLoading(false);
        }
    }, []);

    useEffect(() =>
    {
        if(authReady)
        {
        refreshLeden();
        }
    }, [authReady, refreshLeden]);

    const getLidById = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                const lid = await ledenApi.getLidById(id);
                await refreshLeden();
                setLoading(false);
                return lid;
            }
            catch(error)
            {
                setError(error)
                setLoading(false);
            }
        },
        [refreshLeden]
    ); 

    const createLid = useCallback(async ({voornaam, achternaam}) => 
    {
        try
        {
            setError();
            setLoading(true);
            const newLid = await ledenApi.createLid({voornaam, achternaam});
            await refreshLeden();
            setLoading(false);
            return newLid;
        } catch(error)
        {
            setError(error);
            setLoading(false);
            throw error;
        }
    }, [refreshLeden]);   

    const deleteLid = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                const isDeleted = await ledenApi.deleteLid(id);
                await refreshLeden();
                setLoading(false);
                return isDeleted;
            }
            catch(error)
            {
                setError(error);
                setLoading(false);
            }
        },
        [refreshLeden]
    ); 

    return (
        <LedenContext.Provider value={{leden, error, loading, getLidById, createLid, deleteLid}}>
            {children}
        </LedenContext.Provider>
    );
};