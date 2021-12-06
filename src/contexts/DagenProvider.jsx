import {createContext, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import config from '../config.json';

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
            const {data} = await axios.get(
                `${config.base_url}dagen?limit=25&offset=0`
            );
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

    const createTransaction = useCallback(async ({
        id
    }) => 
    {
        setError();
        try
        {
            const {newDag} = await axios.post(`${config.base_url}dagen/`,
                {id});
            await refreshDagen();
            return newDag;
        } catch(error)
        {
            setError(error);
        }
    }, [refreshDagen]);

    const deleteDagen = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                const {data} = await axios({
                    method: "delete",
                    url: `${config.base_url}dagen/${id}`,
                });
                refreshDagen();
                return data;
            } catch(error)
            {
                console.log(error);
                throw error;
            } finally
            {
                setLoading(false);
            }
        },
        [refreshDagen]
    ); 

    return (
        <DagenContext.Provider value={{dagen, error, loading, createTransaction, deleteDagen}}>
            {children}
        </DagenContext.Provider>
    );
};