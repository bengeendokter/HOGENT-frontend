import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from 'react';
import Aanwezigheid from '../components/Aanwezigheid';
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import {formatDate} from '../hooks/useFormat';
import Nieuw from '../components/buttons/Nieuw';

export default function Dag()
{
    const {id} = useParams();
    const {setDag, aanwezigheden, error, loading} = useContext(AanwezighedenContext);

    useEffect(() =>
    {
        setDag(id);
    }, [setDag, id]);

    return (
        <>
            <h1>{formatDate(id)}</h1>
            <h2>{loading && "Laden..."}</h2>
            {(error && !aanwezigheden.length) && <pre className="text-red-600">{error.message}</pre>}
            {aanwezigheden.sort((aanw1, aanw2) => aanw1.voornaam < aanw2.voornaam ? -1 : 1)
                .map((aanwezigheid) => <Aanwezigheid key={aanwezigheid.id} props={aanwezigheid} />)}
            {!aanwezigheden.length && <h2>Er zijn nog geen aanwezigheden</h2>}
            <Nieuw></Nieuw>
        </>
    );
}