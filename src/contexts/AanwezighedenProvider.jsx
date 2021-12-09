import {createContext, useState, useEffect, useCallback} from 'react';
import * as aanwezighedenApi from '../api/aanwezigheden';

export const AanwezighedenContext = createContext();

export const AanwezighedenProvider = ({children}) =>
{

    const [aanwezigheden, setAanwezigheden] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const refreshAanwezigheden = useCallback(async () =>
    {
        try
        {
            setError();
            setLoading(true);
            const {data} = await aanwezighedenApi.getAllAanwezigheden();
            setAanwezigheden(data.data);
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
        refreshAanwezigheden();
    }, [refreshAanwezigheden]);

    const getAanwezigheidById = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                const aanwezigheid = await aanwezighedenApi.getAanwezigheidById(id);
                await refreshAanwezigheden();
                return aanwezigheid;
            } catch(error)
            {
                setError(error)
            } finally
            {
                setLoading(false);
            }
        },
        [refreshAanwezigheden]
    );

    const createAanwezigheid = useCallback(async ({voornaam, achternaam}) => 
    {
        try
        {
            setError();
            setLoading(true);
            const newAanwezigheid = await aanwezighedenApi.createAanwezigheid({voornaam, achternaam});
            await refreshAanwezigheden();
            return newAanwezigheid;
        }
        catch(error)
        {
            setError(error);
        }
        finally
        {
            setLoading(false);
        }
    }, [refreshAanwezigheden]);


    const updateAanwezigheid = useCallback(async (id, {voornaam, achternaam}) => 
    {
        try
        {
            setError();
            setLoading(true);
            const newAanwezigheid = await aanwezighedenApi.updateAanwezigheid(id, {voornaam, achternaam});
            await refreshAanwezigheden();
            return newAanwezigheid;
        }
        catch(error)
        {
            setError(error);
        }
        finally
        {
            setLoading(false);
        }
    }, [refreshAanwezigheden]);

    const deleteAanwezigheid = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                const isDeleted = await aanwezighedenApi.deleteAanwezigheid(id);
                await refreshAanwezigheden();
                return isDeleted;
            } catch(error)
            {
                setError(error)
            } finally
            {
                setLoading(false);
            }
        },
        [refreshAanwezigheden]
    );

    return (
        <AanwezighedenContext.Provider value={{aanwezigheden, error, loading, getAanwezigheidById, createAanwezigheid, updateAanwezigheid, deleteAanwezigheid}}>
            {children}
        </AanwezighedenContext.Provider>
    );
};