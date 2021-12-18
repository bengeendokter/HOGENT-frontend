import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from 'react';
import Aanwezigheid from '../components/Aanwezigheid';
import {AanwezighedenContext} from '../contexts/AanwezighedenProvider';
import AanwezigheidForm from '../components/AanwezigheidForm';
import { formatDate } from '../hooks/useFormat';

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
    if(!aanwezigheden.length) return <h1>Geen aanwezigheden gevonden</h1>;

    return (
        <>
            <h1>{formatDate(id)}</h1>
            <AanwezigheidForm/>
            <div className="ledenlijst">
                {aanwezigheden.map((aanwezigheid) => <Aanwezigheid key={aanwezigheid.id} props={aanwezigheid} />)}
            </div>
        </>
    );
}