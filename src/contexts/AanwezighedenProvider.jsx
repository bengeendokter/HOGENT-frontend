import {createContext, useState, useEffect, useCallback, useContext} from 'react';
import { DagenContext } from '../contexts/DagenProvider';
import * as aanwezighedenApi from '../api/aanwezigheden';

export const AanwezighedenContext = createContext();

export const AanwezighedenProvider = ({children}) =>
{

    const [aanwezigheden, setAanwezigheden] = useState([]);
    const [error, setError] = useState();
    const [dag, setDag] = useState(0);
    const [loading, setLoading] = useState(false);
    const { refreshDagen } = useContext(DagenContext);

    const refreshAanwezigheden = useCallback(async () =>
    {
        try
        {
            setError();
            setLoading(true);
            const {data} = await aanwezighedenApi.getAllAanwezigheden(dag);
            setAanwezigheden(data.data);
        } catch(error)
        {
            setError(error)
        } finally
        {
            setLoading(false);
        }
    }, [dag]);

    useEffect(() =>
    {
        refreshAanwezigheden();
    }, [refreshAanwezigheden, dag]);

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

    const createAanwezigheid = useCallback(async ({dagid, lidid, aanwezig}) => 
    {
        try
        {
            setError();
            setLoading(true);
            const newAanwezigheid = await aanwezighedenApi.createAanwezigheid({dagid, lidid, aanwezig});
            await refreshAanwezigheden();
            await refreshDagen();
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
    }, [refreshAanwezigheden, refreshDagen]);


    const updateAanwezigheid = useCallback(async (id, {dagid, lidid, aanwezig}) => 
    {
        try
        {
            setError();
            setLoading(true);
            const newAanwezigheid = await aanwezighedenApi.updateAanwezigheid(id, {dagid, lidid, aanwezig});
            await refreshAanwezigheden();
            await refreshDagen();
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
    }, [refreshAanwezigheden, refreshDagen]);

    const deleteAanwezigheid = useCallback(
        async (id) =>
        {
            try
            {
                setError();
                setLoading(true);
                const isDeleted = await aanwezighedenApi.deleteAanwezigheid(id);
                await refreshAanwezigheden();
                await refreshDagen();
                return isDeleted;
            } catch(error)
            {
                setError(error)
            } finally
            {
                setLoading(false);
            }
        },
        [refreshAanwezigheden, refreshDagen]
    );

    return (
        <AanwezighedenContext.Provider value={{setDag, aanwezigheden, error, loading, getAanwezigheidById, createAanwezigheid, updateAanwezigheid, deleteAanwezigheid}}>
            {children}
        </AanwezighedenContext.Provider>
    );
};