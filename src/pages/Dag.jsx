import {useParams} from "react-router-dom";
import React, { useCallback, useContext } from 'react';
import { AanwezighedenContext } from '../contexts/AanwezighedenProvider';

export default function Dag()
{
    const { id } = useParams();
    const {aanwezigheden, error, loading} = useContext(AanwezighedenContext);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre className="text-red-600">{error.message}</pre>
    if (!aanwezigheden) return null;



    return (
        <>
            <h1>{id}</h1>
        </>
    );

}