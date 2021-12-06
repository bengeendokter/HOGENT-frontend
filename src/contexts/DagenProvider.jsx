import {createContext, useState, useEffect, useCallback} from 'react';
import axios from 'axios';

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
                `http://localhost:9000/api/dagen`
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

    const createTransaction = async ({
        id
    }) => 
    {
        setError();
        try
        {
            const {newDag} = await axios.post('http://localhost:9000/api/dagn/',
                {id});
            await refreshDagen();
            return newDag;
        } catch(error)
        {
            setError(error);
        }
    }

        // TODO delete
    

        // TODO update
        // TODO get id    

        return (
            <DagenContext.Provider value={{dagen, error, loading, createTransaction}}>
                {children}
            </DagenContext.Provider>
        );
    };