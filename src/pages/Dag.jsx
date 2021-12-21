import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from 'react';
import Aanwezigheid from '../components/Aanwezigheid';
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import { formatDate } from '../hooks/useFormat';
import Add from '../components/buttons/Add';

export default function Dag()
{
    const {id} = useParams();
    const {setDag, aanwezigheden, error, loading} = useContext(AanwezighedenContext);
    
    useEffect(() =>
    {
        setDag(id);
    }, [setDag, id]);

    if(loading) return <h1>Loading...</h1>;
    if(error && !aanwezigheden.length) return <pre className="text-red-600">{error.message}</pre>

    return (
        <>
            <h1>{formatDate(id)}</h1>
            <div className="ledenlijst">
                {aanwezigheden.sort((aanw1, aanw2) => aanw1.voornaam < aanw2.voornaam ? -1 : 1)
                .map((aanwezigheid) => <Aanwezigheid key={aanwezigheid.id} props={aanwezigheid} />)}
            </div>
            {!aanwezigheden.length && <h1>Geen aanwezigheden gevonden</h1>}
            <Add></Add>
        </>
    );
}