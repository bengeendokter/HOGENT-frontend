import {createContext, useState, useEffect, useCallback} from 'react';
import * as dagenApi from '../api/dagen';

export const DagenContext = createContext();

export const DagenProvider = ({children}) =>
{

    const [dagen, setDagen] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const refreshDagen = useCallback(async () =>
    {
        try
        {
            setError();
            setLoading(true);
            const {data} = await dagenApi.getAllDagen();
            setDagen(data.data);
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
        refreshDagen();
    }, [refreshDagen]);

    const createDag = useCallback(async ({
        id
    }) => 
    {
        setError();
        try
        {
            const newDag = await dagenApi.createDag({id});
            await refreshDagen();
            return newDag;
        } catch(error)
        {
            setError(error);
        }
    }, [refreshDagen]);

    const deleteDag = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                await dagenApi.deleteDag(id);
                await refreshDagen();
            } catch(error)
            {
                setError(error);
            } finally
            {
                setLoading(false);
            }
        },
        [refreshDagen]
    ); 

    return (
        <DagenContext.Provider value={{dagen, error, loading, refreshDagen, createDag, deleteDag}}>
            {children}
        </DagenContext.Provider>
    );
};